import React from 'react';
import css from './Navigation.module.css';
import {NavLink} from "react-router-dom";
import * as JsEncryptModule from 'jsencrypt';

const Navigation = () => {
    let crypt = new JsEncryptModule.JSEncrypt();
    crypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7JYymNzqXB79VLDkeBNiQcXzIsOPTqPTghkMl0pjX5sVZNT3Zq4gdhwQeurRZ+j7qH8y66+sKyGC7Poj2WJMc3oJBALlFQ31CeFDtKy/fUvqVwpc4SL1+QuWiR0ghOs+DFTqEPJ9ZsNQ7tv7Gt/sPNsZZv8/RsP44zJZunsXlOQIDAQAB");
    crypt.setPrivateKey("MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALsljKY3OpcHv1UsOR4E2JBxfMiw49Oo9OCGQyXSmNfmxVk1PdmriB2HBB66tFn6PuofzLrr6wrIYLs+iPZYkxzegkEAuUVDfUJ4UO0rL99S+pXClzhIvX5C5aJHSCE6z4MVOoQ8n1mw1Du2/sa3+w82xlm/z9Gw/jjMlm6exeU5AgMBAAECgYEAtBfnaNC/HjYDZthewseRDDdaCNtI8xelRyeNGKm4EhRul3FH6t9J5nhWe6faBLhvsOgXIU4EauT3SVldfgswzTK3mIydChiIifUbY6iEtAshrKTJVRbpqNpl20wZheZdhEHdUUuLiKueWq1nyrcbd1pk+sKGmluILUrrqhk3wb0CQQDjH5wTBTLqERgroC/ST2t/RsSjCakp4Hav+W47Ng3ZpS0yxPdlqp3nijscVNUVDa1xfGIFmX3AtZyXEfdfxYeXAkEA0vDHfMyS9C4YKiQu+/HNmrqd7l43qBGPcUDD6aEVogJOMOBE7529kEchnk+mryYSC4LloSldBLgrUaXP1YITrwJBAMjgDR75ayV/xvvWqlT8rxubkJCOG9KQ1wgeuHKgBTHomAgeEp0VgKDnLg6JrQf419zWYK+JKKKHPZ6TYlGPF7MCQHHob/Emj5yoX4gyLeUDeGG7sJkN68QoZ2ti6+h3gjUQRaUDFnbGmZ0VrEPPA1XFmyz4LIRQz9hCk7HtdkP3kCUCQFvO7vTS0o0s7bWxUwPRLfH89im9hzzKFld60bUM1CabFHIn9M2FJ/1PyVTRSoA0W85YCsJciYwJiyNcRKRno+4=");

    var card = '378282246310005';
    // var cvv = '222';

    let enc = crypt.encrypt(card);
    console.log('encCard', enc);
    let dec = crypt.decrypt(enc);
    console.log('decCard', dec);

    return (
        <div className={css.navigation}>
            <div className={css.item}>
                <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>Dialogs</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
            </div>
        </div>
    );
};

export default Navigation;
