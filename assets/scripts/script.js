const searchInput = document.querySelector('#search-input');

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
})

function search() {
    const input = searchInput.value;

    window.location.href = 'https://www.google.com.br/search?q='+ input +'&sxsrf=APq-WBv2UFSmzR1zKItn4h4GEd4hVY3drg%3A1650399963640&source=hp&ei=2xpfYvSnJaay5OUP-v-9wAc&iflsig=AHkkrS4AAAAAYl8o66yZCFjiSu9_tgD6ervofL3QUbis&ved=0ahUKEwi0gcb8-qD3AhUmGbkGHfp_D3gQ4dUDCAc&uact=5&oq=' + input + '&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyFAguEIAEELEDEIMBEMcBENEDENQCMgsILhCABBCxAxCDATILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgsIABCABBCxAxCDATIFCAAQgAQyCAguEIAEELEDMggIABCABBCxAzoICC4QgAQQ1AI6BwgjELECECc6CgguELEDEIMBEAo6EwguELEDEIMBEMcBENEDENQCEAo6CggAELEDEIMBEAo6BwgAELEDEAo6BwguENQCEAo6EQguEIAEELEDEIMBEMcBENEDOgQIABBDUABYqxJgrBZoAnAAeAGAAaoCiAHICZIBBTAuNi4xmAEAoAEB&sclient=gws-wiz'
}