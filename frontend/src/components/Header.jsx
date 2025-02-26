import { signInWithGoogle, signOutFromGoogle } from '../lib/firebase';
import { Link } from 'react-router-dom';
import useAuth from '../lib/useAuth';

export default function Header() { 
    const { user, loading } = useAuth();
    
    return (
        <header className='header'>
            <Link to="/">LTC</Link>
            {!loading && (
                <button 
                    type='button'
                    className=''
                    onClick={user ? signOutFromGoogle : signInWithGoogle}
                >
                    Log {user ? 'out' : 'in'}
                </button>
            )}
        </header>
    );
};