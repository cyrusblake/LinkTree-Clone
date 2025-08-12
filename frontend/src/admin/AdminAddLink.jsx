import useAuth from '../lib/useAuth';
import { setLinkDoc } from '../lib/write';
import { useState } from 'react';
import '../admin/style.css';

export default function AdminAddLink({ allLinks = [] }) {
    const [linkName, setLinkName] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const { user, isAdmin } = useAuth();

    const submitLink = async (e) => {
        e.preventDefault();
        try {
            if (linkName.length === 0 || linkUrl.length === 0) {
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

    // Share profile link (like Linktree)
    const handleShareProfile = () => {
        if (!user) {
            window.alert('You must be logged in to share your profile.');
            return;
        }
        const profileUrl = `${window.location.origin}/View/${user.uid}`;
        navigator.clipboard.writeText(profileUrl)
            .then(() => window.alert('Profile link copied to clipboard!'))
            .catch(() => window.alert('Failed to copy profile link.'));
    };

    return (
        <>
            <form onSubmit={submitLink}>
                <div >
                    <button className="tp" type="submit">
                        Add New Link
                    </button>
                    <button className="tp" type="button" onClick={handleShareProfile}>
                        Share Profile
                    </button>
                </div>
                <input
                    name='linkName'
                    className="input"
                    type="text"
                    placeholder="Link Name"
                    value={linkName}
                    onChange={(e) => setLinkName(e.target.value)}
                />
                <input
                    name='linkUrl'
                    className="input"
                    type="text"
                    placeholder="URL"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                />
            </form>
        </>
    );
}