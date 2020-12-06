const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.

Instagram: https://instagram.com/_tn.botz_/

Best regards, [Tn•Bot•Z].`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
╔──────┐
│ [Tn•Bot•Z] ──➤ Local
└──────╝

╔────「 INFORMATION 」────
│
│• [Tn•Bot•Z]
│• wa.me/6289661976243
│
│ Hi, ${pushname}! 👋️
│ Berikut ada beberapa fitur yang ada pada bot ini!✨
│
│───── ✎✎✎✎ ─────
│
│────「 LIST MENU 」────
│
│ ⚡Creator⚡:
│
│-❥ *${prefix}cooltext*
│-❥ *${prefix}sticker*
│-❥ *${prefix}stickergif* 「Sedang Gangguan」❌
│-❥ *${prefix}stickergiphy*
│-❥ *${prefix}meme*
│-❥ *${prefix}quotemaker*
│-❥ *${prefix}nulis*
│
│ ✨Islam:
│-❥ *${prefix}infosurah*
│-❥ *${prefix}surah*
│-❥ *${prefix}tafsir*
│-❥ *${prefix}ALaudio*
│-❥ *${prefix}jsolat*
│
│ ⚡Fun Menu⚡ (Group):
│-❥ *${prefix}simisimi*
│-❥ *${prefix}katakasar*
│	┷-❥ *${prefix}klasmen*
│
│ ⚡Download⚡:
│-❥ *${prefix}ytmp3*
│-❥ *${prefix}ytmp4*
│-❥ *${prefix}facebook*
│
│⚡Primbon⚡:
│-❥ *${prefix}cekzodiak*
│-❥ *${prefix}artinama*
│-❥ *${prefix}cekjodoh*
│
│ ⚡Search Any⚡:
│-❥ *${prefix}images*
│-❥ *${prefix}sreddit*
│-❥ *${prefix}resep*
│-❥ *${prefix}stalkig*
│-❥ *${prefix}wiki*
│-❥ *${prefix}cuaca*
│-❥ *${prefix}chord*
│-❥ *${prefix}lirik*
│-❥ *${prefix}ss*
│-❥ *${prefix}play*
│-❥ *${prefix}movie*
│-❥ *${prefix}whatanime*
│
│ ⚡Random Teks⚡:
│-❥ *${prefix}motivasi*
│-❥ *${prefix}fakta*
│-❥ *${prefix}pantun*
│-❥ *${prefix}katabijak*
│-❥ *${prefix}quote*
│-❥ *${prefix}cerpen*
│-❥ *${prefix}cersex*
│-❥ *${prefix}puisi*
│
│ ⚡Random Images⚡:
│-❥ *${prefix}anime*
│-❥ *${prefix}kpop*
│-❥ *${prefix}memes*
│
│ ⚡Lain-lain⚡:
│-❥ *${prefix}tts*
│-❥ *${prefix}translate*
│-❥ *${prefix}resi*
│-❥ *${prefix}covidindo*
│-❥ *${prefix}ceklokasi*
│-❥ *${prefix}shortlink*
│-❥ *${prefix}Macrofont*
│
│ ⚡Tentang Bot⚡:
│-❥ *${prefix}tnc*
│-❥ *${prefix}donasi*
│-❥ *${prefix}botstat*
│-❥ *${prefix}ownerbot*
│-❥ *${prefix}join*
│
│_-_-_-_-_-_-_-_-_-_-_-_-_-_
│
│ ⚡Owner Bot⚡:
│-❥ *${prefix}ban* - banned
│-❥ *${prefix}bc* - promosi
│-❥ *${prefix}leaveall* - keluar semua grup
│-❥ *${prefix}clearall* - hapus semua chat
│
╚═「Hope you have a great day!✨`」



}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
╔─Berikut adalah fitur admin grup yang ada pada bot ini!
│
│-❥ *${prefix}add*
│-❥ *${prefix}kick* @tag
│-❥ *${prefix}promote* @tag
│-❥ *${prefix}demote* @tag
│-❥ *${prefix}mutegrup*
│-❥ *${prefix}tagall*
│-❥ *${prefix}setprofile*
│-❥ *${prefix}del*
│-❥ *${prefix}welcome*
│
│_-_-_-_-_-_-_-_-_-_-_-_-_-_
│
│⚠ [ *Owner Group Only* ] ⚠
│Berikut adalah fitur owner grup yang ada pada bot ini!
│-❥ *${prefix}kickall*
╚═「*Owner Group adalah pembuat grup.*」
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
╔─Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
│
│Pulsa : 089661976243
│
│Doakan agar project bot ini bisa terus berkembang
│Doakan agar author bot ini dapat ide-ide yang kreatif lagi
│
│Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.
│
│───────────────────────
│ ●-▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬-●
│ ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
│ ╔══╦╗────╔╗─╔╗╔╗
│ ╚╗╔╣╚╦═╦═╣╚╗║╚╝╠═╦╦╗
│ ─║║║║║╬║║║╩║╚╗╔╣║║║║
│ ─╚╝╚╩╩╩╩╩╩╩╝─╚╝╚═╩═╝
│ ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
│ ●-▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬-●
│───────────────────────
│
╚═「Terimakasih. [Tn•Bot•Z]」`
}
