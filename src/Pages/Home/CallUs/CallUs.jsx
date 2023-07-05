import { useRef, useState } from 'react';
import { MdOutlineContentCopy } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const CallUs = () => {
    const [isCopied, setIsCopied] = useState(false);
    const phoneNumberRef = useRef(null);
    const handleCopyNumber = () => {
        if (phoneNumberRef.current) {
            const phoneNumber = phoneNumberRef.current.textContent;
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
            navigator.clipboard.writeText(phoneNumber);
        }
    }
    return (
        <div className="bg-slate-900 text-white font-bold p-24 text-center text-3xl flex justify-center items-center gap-3 my-12">
            <p>Call Us: <span ref={phoneNumberRef}>+1 555-987-6543</span></p>
            <button onClick={handleCopyNumber}>
                {isCopied ? <IoIosCheckmarkCircle className="text-blue-400" /> : <MdOutlineContentCopy className="text-blue-400" />}
            </button>
        </div >
    );
};
export default CallUs;