let handler = async (m, { conn }) => {
/*
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  const town = await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m, {quoted: fkontak})
  await conn.reply(m.chat, "My Owner", m, {quoted: town})
  */
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=62895347198105:+62 895-3471-98105\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih Owner Saya Kak.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, {quoted: m})

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler