const fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
    if (!args[0]) throw 'Uhm..urlnya mana?'
    let res = await fetch(`https://server1.majhcc.xyz/api/tk?url=${args[0]}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (json.success !== true) throw json.error
    conn.sendFile(m.chat, json.link, '', json.link, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler
