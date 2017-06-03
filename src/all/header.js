import React,{Component} from 'react'
import * as firebase from 'firebase';
import logo from './img/logo.png';
import logout from './img/logout.png';
import img from './img/img.jpg';
import iconfb from "./img/iconfb.png"
import menu from "./img/menu.png"
import overview from "./img/overview.png"
import android from "./img/android.png"
import ios from "./img/ios.png"
import pc from "./img/pc.png"

export default class HEADERREACT extends Component {


  componentDidMount(){
      setInterval(this.header, 50);
      setInterval(this.logins, 50);
      setInterval(this.Logframe, 50);
      setInterval(this.tt, 50);
      setInterval(this.home,50);
      setInterval(this.applogo,50);
  }

  constructor(props){
    super(props);
    this.state={
      id:'',
      username:'',
      user: null,
      isLoggedIn: false,
    };
  }

  logins(){
    var x = document.getElementById("logins");
    if(x){
    document.getElementById("logins").style.width=  document.body.clientWidth+"px";
    document.getElementById("logins").style.height= document.documentElement.clientHeight+"px";
    document.getElementById("logins").style.background="rgba(0,0,0,0.8)";
    }
  }
  loginclick(){
    var x = document.getElementById("logins").style.display="none";
    if(x){
        document.getElementById("logins").style.display ="block"
    }
  }

  Logframe(){
    var x = document.getElementById("Logframe");
    if(x){
    document.getElementById("Logframe").style.marginTop = document.documentElement.clientHeight/4 +"px";
    }
  }

  exitloginclick(){
    var x = document.getElementById("logins").style.display="block";
    if(x){
        document.getElementById("logins").style.display ="none"
    }
  }

  tt(){
    var x = document.getElementById("tt");
    if(x){
    document.getElementById("tt").style.width= "240px";
    document.getElementById("tt").style.height= "50px";
    }
  }

  home(){
    var x = document.getElementById("home");
    if(x){
      document.getElementById("home").style.width=  document.body.clientWidth+"px";
      document.getElementById("home").style.minHeight=document.documentElement.clientHeight+"px";
      document.getElementById("homes").style.width=  document.body.clientWidth+"px";
      document.getElementById("homes").style.Height=document.documentElement.clientHeight+"px";
      document.getElementById("home1").style.height=document.documentElement.clientHeight-90+"px";
      document.getElementById("home2").style.height=document.documentElement.clientHeight-90+"px";

    }
  }


  applogo(){
    document.getElementById("applogo").style.marginTop = document.documentElement.clientHeight/5+"px";
    if(document.documentElement.clientHeight <600 ){
      document.getElementById("applogo").style.marginTop = "50px";
      document.getElementById("applogo").style.width = "100px";
      document.getElementById("applogo").style.height = "100px";

    }
  }


  loginfacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          this.setState({user: result.user, isLoggedIn: true});
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {

            }
            this.props.getdata(user.uid);

            this.setState({
              id: user.uid,
              username: user.displayName,
            })
            const userinfo={
              id:this.state.id,
              username:this.state.username,
            }
              firebase.database().ref('user/'+this.state.id+'/info/').set(userinfo)
              const datainfo={
                id:0,
                note2:"key",
              }
                firebase.database().ref('user/'+this.state.id+'/data/0/').set(datainfo)
                const datainfo2={
                  id2:0,
                  note3:"key",
                }
                  firebase.database().ref('user/'+this.state.id+'/data2/0/').set(datainfo2)
          });

          document.getElementById("logins").style.display ="none";
          document.getElementById("home").style.display ="none";
          document.getElementById("tt").style.display ="block";
        }.bind(this));
      };


      logOut() {
        firebase.auth().signOut().then(function() {
          this.setState({user: null, isLoggedIn: false});
          document.getElementById("login").style.display ="block";
          document.getElementById("tt").style.display ="none";
          document.getElementById("home").style.display ="block";
          this.props.getkey("key");
        }.bind(this));
      };


      menu(){
          var check = this.state.id;
          if(check != ''){
          var x = document.getElementById("menu");
          if(x.className==="menu"){
            document.getElementById("nav").style.left="0px";
            x.className="menu ao";
          }
          else {
            document.getElementById("nav").style.left="-251px";
            x.className="menu";
          }
        }
      }


    render() {
      const thongtin = this.state;

    return(

      <div>
          <header id="header">
              <img src={menu}  height="30" width="30" className="menu" id="menu" alt="menu" onClick={this.menu.bind(this)}/>
              <div id="tt">
                <p id="tt2"><img src={thongtin.isLoggedIn ? thongtin.user.photoURL : ''} height="40" width="40" className="App-avatar" alt="avatar" /> </p>
                <p id="tt3">{thongtin.isLoggedIn ? thongtin.user.displayName : '' }</p>
                  <p id="tt4" onClick={this.logOut.bind(this)}><img src={logout} height="30" width="30" className="App-logout" alt="logout" /> </p>
              </div>

              <div id="logins">
                <div id="Logframe">
                  <div id="exit">
                      <div id="exit2" onClick={this.exitloginclick.bind(this)}> {thongtin.isLoggedIn}<a href="">X</a></div>
                  </div>
                <div id="abc"><h3>login with:</h3></div>
                <div id="facebook"> <img src={iconfb}  height="120" width="120" className="facebook2" alt="iconfb" onClick={this.loginfacebook.bind(this)}/> </div>
                </div>
              </div>
          </header>

          <div id="home">
              <div id="homes">
                <div id="home1">
                    <div><img src={logo}  height="150" width="150" id="applogo" alt="logo" /></div>
                    <h1><p className="apptext">To-Do React</p></h1>
                    <p className="apptext2">From work to play, To-Do is the easiest </p>
                    <p className=""> way to get stuff done, every day.</p>
                      <div id="login">
                        <div className="loginsection" onClick={this.loginclick.bind(this)}><a href="#">Login</a></div>
                      </div>
                </div>
                <div id="home2"></div>

                <div id="footer">
                  <div id="footeroverview">
                    <div className="overview">
                      <div className="overviewtop"><img src={overview}  height="40" width="40" className="imgoverview" id="" alt="overview"/></div>
                      <div className="overviewbot">Overview</div>
                    </div>

                    <div className="overview">
                      <div className="overviewtop"><img src={android}  height="40" width="40" className="imgoverview" id="" alt="android"/></div>
                      <div className="overviewbot">Android</div>
                    </div>

                    <div className="overview">
                      <div className="overviewtop"><img src={ios}  height="40" width="40" className="imgoverview" id="" alt="ios"/></div>
                      <div className="overviewbot">Ios</div>
                    </div>

                    <div className="overview">
                      <div className="overviewtop"><img src={pc}  height="40" width="40" className="imgoverview" id="" alt="pc"/></div>
                      <div className="overviewbot">Web</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>

              <div id="overview1">
                <div className="div1"></div>
                <div className="div2">
                    <div className="textdiv">
                      <h2>Access tasks everywhere</h2><br/>
                      <p>
                          With apps and extensions for 10+ platforms,<br/>
                          your tasks are always there: on mobile devices,<br/>
                          web browsers, inboxes, and more.
                      </p>
                    </div>
                </div>
              </div>

              <div id="overview2">
                <div className="div1">
                    <div className="textdiv">
                      <h2>Collaborate on shared tasks</h2><br/>
                      <p>
                          Share unlimited tasks with anyone – <br/>
                          colleagues, family, friends – and collaborate <br/>
                          in real-time on shared projects and goals.
                      </p>
                    </div>
                </div>
                <div className="div2"></div>
              </div>

              <div id="overview3">
                <div className="div1"></div>
                <div className="div2">
                    <div className="textdiv">
                      <h2>Distraction-free design</h2><br/>
                      <p>
                          Your tasks are a big part of your life. Stay <br/>
                          motivated and organized with Todoist’s <br/>
                          intuitive and beautiful to do list.
                      </p>
                    </div>
                </div>
              </div>


          </div>


      </div>

    )
  }
}
