export function megjelenites(lista) {
    const ELEM = document.getElementsByClassName("tartalom")[0];
    ELEM.innerhtml += '<div>'
    ELEM.innerhtml += `<p>${lista.nev}</p>`;
    ELEM.innerhtml += `<p>${lista.fajta}</p>`;
    ELEM.innerhtml += `<p>${lista.szin}</p>`;
    ELEM.innerhtml += '</div>'
    console.log(ELEM.innerhtml);
}