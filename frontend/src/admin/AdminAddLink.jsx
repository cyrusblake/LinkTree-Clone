// import { getUserID } from '../lib/firebase';
import useAuth from '../lib/useAuth';
import { setLinkDoc } from '../lib/write';
import { useState } from 'react';
import '../admin/style.css';



export default function AdminAddLink() {
    const [linkName, setLinkName] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const { user, isAdmin } = useAuth();

    // console.log("isAdmin:", isAdmin); // Debugging log

    // if (!isAdmin){
    //     return null;
    // }

    const submitLink = async (e) => {
        e.preventDefault();
        
        try {
            if (linkName.length === 0 && linkUrl.length === 0) {
                window.alert('Enter a link name and url');
                return;
            }
            await setLinkDoc(linkName, linkUrl, user.uid);
            window.alert('Link added successfully');
            window.location.reload();
            setLinkName('');
            setLinkUrl('');
        } catch (e) {
            window.alert(e.message);
        }
    };
    return (
        <>
        <form onSubmit={submitLink}>
            <button className="tp">
                Add New Link
            </button>
            <br/>
            <input
            name='linkName'
            className="input"
            type="text"
            placeholder="Link Name"
            value={linkName}
            onChange={(e) => {
                setLinkName(e.target.value);
            }}
            />
            <input
            name='linkUrl'
            className="input"
            type="text"
            placeholder="URL"
            value={linkUrl}
            onChange={(e) => {
                setLinkUrl(e.target.value);
            }}

            />
            </form>  
        </>
    );
}