import './css/form-link-style.css'

export default function FormLink({linkAccount, account}) {
    return (
        <a href={linkAccount}>
            {account.children}
        </a>
    )
}