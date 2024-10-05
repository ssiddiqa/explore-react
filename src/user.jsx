import './users.css'

export default function User({ user }) {
    console.log(user);
    const { name, email } = user;
    return (
        <div className='box'>
            <h3>Name: {name}</h3>
            <p>Email:{email}</p>
        </div>
    )
}