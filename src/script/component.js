export const UserInfo = (props) => {
    return (
        `
        <div class="user_info">
                <span class="welcome_name">${props.firstName} ${props.lastName}</span>
            <button id="logout">Logout</div>
        </div>
        `
    )
};

export const LoginContainer = () => {
    return (
        `
        <div id="login_container">
            <form id="login_contents">
                <h1 class="title">Graphql 📈📉</h1>
                <h2 class="title_guide">Sign in to your intra account</h2>
                <input type="text" name="username" id="username" placeholder="Username/Email" required>
                <input type="password" name="password" id="password" placeholder="Password" required>
                <div id="error"></div>
                <input type="submit" value="Login" id="submit">
            </div>
        </div>
        `
    )
};

export const TabButton = (props) => {
    return (
        `
        <button class="tab_button" id="${props.name}" onclick="changeTab(event,'${props.name}')">${props.name}</button>
        `
    )
};

export const Header = () => {
    return (
        `
        <header id="header">
            <h1 id="home" class="header_title">Graphql 📈📉</h1>
        </header>
        `
    )
};

export const GraphContainer = () => {
    return (
        `
        <div id="graph_container" class="graph_container">
        </div>
        `
    )
}

export const MainContainer = () => {
    return (
        `
        <div id="main_container">
        </div>
        `
    )
}

export const StatsContainer = () => {
    return (
        `
        <div id="stats_container" class="stats_container">
            <div id="stats1" class="stats"></div>
            <div id="stats2" class="stats"></div>
        </div>
        `
    )
}

// Title, content and list boolean
export const StatsContent = (title, data, bList) => {

    if (bList && Array.isArray(data)) {
        let s = '';
        for (let i = 0; i < data.length; i++) {
            s += `<li>${data[i]}</li>`;
        }
        return (
            `
            <div class="stats_content">
                <h3 class="stats_title">${title}</h3>
                <ul class="stats_data">
                    ${s}
                </ul>
            </div>
            `
        )
    } else {
        return (
            `
            <div class="stats_content">
                <h3 class="stats_title">${title}</h3>
                <p class="stats_data">${data}</p>
            </div>
            `
        )
    }
}