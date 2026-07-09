export function buildWhatsAppUrl(phone: string, message: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(phone: string, message: string) {
  window.open(buildWhatsAppUrl(phone, message), "_blank", "noopener,noreferrer");
}

export function buildTrialMessage(data: {
  name: string;
  slot: string;
  phone?: string;
  email?: string;
}) {
  const lines = [
    "Здравствуйте! Хочу записаться на занятие.",
    "",
    `Имя: ${data.name}`,
    `Занятие: ${data.slot}`,
  ];

  if (data.phone) lines.push(`Телефон: ${data.phone}`);
  if (data.email) lines.push(`Email: ${data.email}`);

  return lines.join("\n");
}
