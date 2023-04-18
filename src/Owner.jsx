import Layout from "./Layout"
import userLogo from './picture/user.png'
import './style/Owner.css'

const Owner = () => {
    return (
        <Layout>
            <div id="owner-info">
                <h1>Paifon - Group F - 32</h1>
                <div>
                    <img src={userLogo} style={{height: 150, width:150, }} />
                </div>
                <h3>Short Biography:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis, similique quia hic dolorem aspernatur aperiam architecto officia, cumque soluta adipisci ex dicta ut porro ea at. Autem, totam officia.</p>
            </div>
        </Layout>
    )
}

export default Owner