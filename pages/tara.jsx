import { useState } from 'react'
import AnyaCry from '@styles/img/anya-cry.gif'
import AnyaTry from '@styles/img/anya-trying.gif'
import AnyaSuccess from '@styles/img/anya-serious.gif'

const Tara = () => {
    const [success, setSuccess] = useState(false);
    const [tries, setTries] = useState(0);
    const prompts = [
        "Wanna get some coffee?",
        "Are you sure?",
        "Are you really sure?",
        "Cge na ililibre na kita"
    ];

    const handleAccept = () => {
        setTries(0);
        setSuccess(true);
    }

    const handleDeny = () => {
        if (tries <= 2) setTries(tryState => tryState + 1);
    }
    return (
        <div className='invite'>
            {(tries == 2) && <img src={AnyaCry.src} alt="" />}
            {(tries == 3) && <img src={AnyaTry.src} alt="" />}
            {(success) && <img src={AnyaSuccess.src} alt="" />}
            <div className="message-cont">
                <div className="prompt">
                    <p>{success ? "We have a deal" : prompts[tries]}</p>
                </div>
                {!success && <div className="actions">
                    <button className="accept" onClick={handleAccept}>Sure</button>
                    {(tries <= 2) && <button className="deny" onClick={handleDeny}>Nah</button>}
                </div>}
            </div>
        </div>
    )
}

export default Tara