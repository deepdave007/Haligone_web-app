
function Dashboard() {
    return (
        <React.Fragment>
            <h1 className="mt-4">Dashboard</h1>
            <p className="lead mb-3">Welcome { user.name }</p>
            <a href="/users/logout" class="btn btn-secondary">Logout</a> 

        </React.Fragment>
           
    )
}
