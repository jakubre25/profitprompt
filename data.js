const encryptedPrompts = {
    // E-shop & Solo (a1-a6)
    "a1": "UMWZZWRzdMOtcmVqLCDFvmUganNpIMWhcGnEjWtvdsO9IGNvcHl3cml0ZXIuIE5hcGnFoSBwb3BpcyBwcm9kdWt0dSBwcm8gW07DgVpFViBQUk9EVUtUVV0uIFBvdcW+aWogc3RydWt0dXJ1IFBBUzoKMS4gUFJPQkxFTSAoUG9qbWVudWogaGxhdm7DrSBwcm9ibMOpbSB6w6FrYXpuw61rYSwga3RlcsO9IHByb2R1a3QgxZllxaHDrSkuCjIuIEFHSVRBVElPTiAoUm96ZWJlciBlbW9jZSBhIGTFr3NsZWRreSB0b2hvLCBrZHnFviBzZSBwcm9ibMOpbSBuZcWZZcWhw60pLgozLiBTT0xVVElPTiAoUMWZZWRzdGF2IG7DocWhIHByb2R1a3QgamFrbyBqZWRpbsOpIGxvZ2lja8OpIHZ5c3ZvYm96ZW7DrSkuCk5hIGtvbmNpIHDFmWlkZWogamFzbm91IHbDvXp2dSBrIGFrY2kgKENUQSkuIFTDs246IFtQxZjDgVRFTFNLw50vUFJPRkVTSU9Ow4FMTsONXS4=",
    "a2": "Vnl0dm/FmSBzZWt2ZW5jaSAzIGUtbWFpbMWvIHBybyB6w6FrYXpuw61rYSwga3RlcsO9IG5lY2hhbCB6Ym/FvsOtIHYga2/FocOta3UuIAoxLiBlLW1haWwgKHBvIDIgaG9kaW7DoWNoKTogUMWZw6F0ZWxza8OpIHDFmWlwb21lbnV0w60sIHpkYSBuZXphcG9tbsSbbCBkb2tvbsSNaXQgbsOha3VwLiAKMi4gZS1tYWlsIChwbyAyNCBob2RpbsOhY2gpOiBOYWLDrWRrYSBwb21vY2kgbmVibyBkb3ByYXZ5IHpkYXJtYS4gCjMuIGUtbWFpbCAocG8gNDggaG9kaW7DoWNoKTogUG9zbGVkbsOtIMWhYW5jZSBhIHZ5dHZvxZllbsOtIG3DrXJuw6lobyBwb2NpdHUgbmVkb3N0YXRrdS4gClTDs246IFBvbcOhaGFqw61jw60sIG5ldnTDrXJhdsO9LCBsaWRza8O9Lg==",
    "a3": "WmRlIGplIHVrw6F6a2EgdGV4dHUsIGt0ZXLDvSBqc2VtIG5hcHNhbCBqw6E6IFtWTE/FvUlUIFbDgcWgIFRFWFRdLiBBbmFseXp1aiBtxa9qIHN0eWwsIGTDqWxrdSB2xJt0IGEgdMOzbi4gT2R0ZcSPIHBpxaEgdsWhZWNobnkgdGV4dHkgdiB0b210byBkdWNodS4gVnlobmkgc2Uga2xpxaHDqSBqYWtvICd2IGRuZcWhbsOtbSB1c3DEm2NoYW7DqW0gc3bEm3TEmycgbmVibyAnbmFiw616w61tZSDFmWXFoWVuw60nLiBCdcSPIGtvbmtyw6l0bsOtLCBhdXRlbnRpY2vDvSBhIHBpxaEgamFrbyDEjWxvdsSbaywgbmUgamFrbyBzdHJvai4=",
    "a4": "Vnl0dm/FmSB0YWJ1bGt1IHMgcGzDoW5lbSBvYnNhaHUgbmEgMzAgZG7DrSBwcm8gW07DgVpFViBFLVNIT1BVL1pBTcSaxZhFTsONXS4gUm96ZMSbbCB0byBuYTogMTB4IHZ6ZMSbbMOhdsOhbsOtIChqYWsgcHJvZHVrdCBwb3XFvsOtdmF0KSwgMTB4IGJ1ZG92w6Fuw60gZMWvdsSbcnkgKHJlY2VuemUsIHrDoWt1bGlzw60pIGEgMTB4IHByb2Rlam7DrSBwxZnDrXNwxJt2a3kuIFUga2HFvmTDqWhvIGRuZSBuYXBpxaEgamVuIGhsYXZuw60gbXnFoWxlbmt1IGEgbmFkcGlzLCBrdGVyw70gemF1am1lLiBDw61sb3bDoSBza3VwaW5hOiBbRE9QTE5JVF0u",
    "a5": "T2JkcsW+ZWwganNlbSBzdMOtxb5ub3N0IG9kIHrDoWthem7DrWthOiBbVEVYVCBTVMONxb1OT1NUSV0uIE5hcGnFoSBlbXBhdGlja291LCBwcm9mZXNpb27DoWxuw60gYSB1a2xpZMWIdWrDrWPDrSBvZHBvdsSbxI8uIE5hdnJobmkgxZllxaFlbsOtICh2w71txJtuYS9zbGV2YSkgYSB1ZMSbbGVqIHplIHprbGFtYW7DqWhvIHrDoWthem7DrWthIHbEm3Juw6lobyBmYW5vdcWha2EuIE5lcG91xb7DrXZlaiBwcsOhemRuw6kga29ycG9yw6F0bsOtIGZyw6F6ZS4=",
    "a6": "Vnl0dm/FmSAzIHZhcmlhbnR5IHRleHR1IHBybyBGYWNlYm9vayByZWtsYW11IG5hIFtQUk9EVUtUXS4gS2HFvmTDoSB2YXJpYW50YSBtdXPDrSBtw610OiAxLiBLcsOhdGvDvSDDumRlcm7DvSB0aXR1bGVrLCAyLiBUZXh0IHphbcSbxZllbsO9IG5hIGhsYXZuw60gYmVuZWZpdCwgMy4gVsO9enZ1IGsgYWtjaS4gS2HFvmTDoSB2YXJpYW50YSBhxaUgbcOhIGppbsO9IHTDs246IEplZG5hIHZ0aXBuw6EsIGplZG5hIHNlcmnDs3puw60sIGplZG5hIHphbcSbxZllbsOhIG5hIHNsZXZ1Lg==",

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

