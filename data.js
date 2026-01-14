const encryptedPrompts = {
    // E-shop & Solo (a1-a6)
    "a1": "TmFwaXMgcG9waXMgcHJvZHVrdHUgcHJvIFtOw4daRVYgUFJPRFVLVFVdLiBaYW3EbsWfIHNlIG5hIG7F崢dCByZcWhZW7DrSBwcm9ibMOpbXUuLi4=",
    "a2": "Vnl0dm/FmSAzIHZhcmlhbnR5IGFkcyBjb3B5IHBybyBGYWNlYm9vayBhIEluc3RhZ3JhbSBsb2PDoWzrW11IGJpem5lc3UuLi4=",
    "a3": "TmFwaXMgNSBlLW1haWxvdsO9Y2ggc2VrdmVuY8OtIHBybyBvcHVidMSbbsO9IGtvxaHDrWsuLi4=",
    "a4": "Vnl0dm/FmSBzdHJhdGVnaWkgcHJvIFRpazRvay4gSmFrw6kgdmlkZWEgdG9jaXQgcHJvIFtOSVNIQV0/...",
    "a5": "TmFwaXMgU0VPIG9wdGltaXpvdmFuw70gYmxvZ292w70gxI3sw6FvZWsgbmEgdMOpbWEgW1TD ManuelTUEuLi4=",
    "a6": "TmFwaXMgY2h0b3Zuw70gc2NyaXB0IHBybyB6w6Frem5pY2vDuiBwb2Rwb3J1Li4u",

    // Reality (b1-b5)
    "b1": "Vnl0dm/FmSBwb3V0YXZ9IGluemVyw6F0IHBybyBuZW1vdml0b3N0IFtUWVAgTkVNT1ZJVE9TVElfLi4u",
    "b2": "SnNpIGV4cGVydCBuYSByZWFsw610bsOtIGludmVzdGljZS4gQW5hbHl6dWogW1BBUkFNRVRSWV0uLi4=",
    "b3": "TmFwaXMgc2VrdmVuY2kgMyBlLW1haWzFryBwcm8gcG90ZW5jacOhbG7DrWNoIHByb2RhanRsw60uLi4=",
    "b4": "Vnl0dm/FmSBzY3JpcHQgcHJvIHByb2Rlam7DrSBob3ZvciBtYWppdGVsaSBuZW1vdml0b3N0aS4uLg==",
    "b5": "TmFwaXMgY2h0b3Zuw70gcG9zdCBuYSBGYWNlYm9vayBza3VwaW55IHBybyBuYWLDrWRrdSBzbHXFvmViLi4u",

    // LinkedIn & Brand (c1-c2)
    "c1": "Vnl0dm/FmSA1IHZhcmlhbnQgaG9va8WvIHBybyBMaW5rZWRJbiBwxZnDrXNwxJt2ZWsgbmEgdMOpbWEgW1TD ManuelTUEuLi4=",
    "c2": "UMWZZXR2b8WZIG1vamUgcG96bsOhbmt5IFtQT1pOw4FNS1ZfIHYgcHJvZmVzaW9uw6FsbsOtIExpbmtlZEluIMSNbMOhbmVrLi4u",

    // HR & Nábor (d1-d2)
    "d1": "Vnl0dm/FmSBwcmFjb3Zuw60gaW56ZXLDoXQgcHJvIFtQT1pJQ0VdLiBaYW3EbsWfIHNlIG5hIGJlbmVmaXR5Li4u",
    "d2": "TmFwaXMgZ3JhdHVsYcSNbsOtIGUtbWFpbCBub3bDqW11IHphbcSbc3RuYW5jaS4uLg==",

    // Lokální služby (e1-e2)
    "e1": "Vnl0dm/FmSBsb2PDoWzrSBTRU8gc3RyYXRlZ2lpIHBybyBbT0RCT1JOT1NUXSB2IFtNRVNUT10uLi4=",
    "e2": "TmFwaXMgcmVjZW56aSBuYSBHb29nbGUgTWFwcyBwcm8gbG9rw6FsbsOtIGZpcm11Li4u",

    // Content Creator (f1-f2)
    "f1": "Vnl0dm/FmSAxMCBuw6FwYWRIG5hIFJlZWxzIHBybyBbTklTSEFdLi4u",
    "f2": "TmFwaXMgc2NyaXB0IHBybyBZ b3VUdWJlIHZpZGVvIG8gZMOpbGNlIDEwIG1pbnV0Li4u"
};

function loadPromptsIntoPage() {
    Object.keys(encryptedPrompts).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            try {
                // Dekódování z Base64 s podporou češtiny
                element.innerText = decodeURIComponent(escape(atob(encryptedPrompts[id])));
            } catch (e) {
                console.error("Chyba u ID: " + id);
            }
        }
    });
}