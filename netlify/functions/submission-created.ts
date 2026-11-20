/**
 * Netlify form notification hook for the bitcoin-starter-checklist form.
 * Live sending is OFF unless CHECKLIST_EMAIL_SEND_ENABLED is exactly "true"
 * and Resend credentials plus a physical mailing address are set.
 */
import {
  CHECKLIST_FORM_NAME,
  deliverChecklistEmail,
  isChecklistEmailSendEnabled,
  resendTransport,
} from "../../src/lib/checklist-email";

type FormPayload = {
  form_name?: string;
  data?: Record<string, string | undefined>;
};

export const handler = async (event: { body?: string | null }) => {
  let formName = "";
  let email = "";
  try {
    const parsed = JSON.parse(event.body || "{}") as { payload?: FormPayload } & FormPayload;
    const payload = parsed.payload ?? parsed;
    formName = String(payload.form_name || payload.data?.["form-name"] || "");
    email = String(payload.data?.email || "").trim();
  } catch {
    return json(200, { ok: true, mode: "ignored", reason: "invalid-payload" });
  }

  if (formName && formName !== CHECKLIST_FORM_NAME) {
    return json(200, { ok: true, mode: "ignored", reason: "other-form" });
  }

  // Only attach the Resend transport when the send flag is already on.
  // With the flag off (the default), deliverChecklistEmail never calls it.
  const result = await deliverChecklistEmail({
    to: email,
    env: process.env,
    sendViaResend: isChecklistEmailSendEnabled(process.env) ? resendTransport : undefined,
  });

  return json(200, { ok: true, mode: result.status, reason: "reason" in result ? result.reason : undefined });
};

function json(statusCode: number, body: Record<string, unknown>) {
  return { statusCode, body: JSON.stringify(body) };
}
