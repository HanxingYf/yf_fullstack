
import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={50} src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/c14a19d241220a025e642bc41a2d6aae~300x300.image"  /></div>
            <div className="author-introduction">
                江西财经大学<br></br>
                大三学生 <br />
                前端杨
                <Divider>社交账号</Divider>
                <Avatar size={28} src="https://s3.ax1x.com/2021/03/06/6nxq8x.jpg" className="account"  />
                <Avatar size={28} src="https://s3.ax1x.com/2021/03/06/6nxbP1.jpg"  className="account" />
                <Avatar size={28} src="https://s3.ax1x.com/2021/03/06/6nx75R.jpg"  className="account"  />

            </div>
        </div>
    )

}

export default Author