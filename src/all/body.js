import React,{Component} from 'react'
import * as firebase from 'firebase';
import icon1 from "./img/icon1.png"
import icon2 from "./img/icon2.png"
import icon3 from "./img/icon3.png"
import muiten from "./img/muiten.png"
import check2 from "./img/check.png"
import check3 from "./img/check2.png"
export default class BODYREACT extends Component {

  componentDidMount(){

      setInterval(this.body, 1);
      setInterval(this.nav,1);
      setInterval(this.note,1);
      setInterval(this.note2,1);
      setInterval(this.nen1,1);
      setInterval(this.nen2,1);

  }

  componentWillReceiveProps(a){
    this.setState({id: a.global.get.uid})
    this.getData(a.global.get.uid)
    this.getData2(a.global.get.uid)
  }

  constructor(props){
   super(props);
     this.state = {
       arraydata:[

       ],
       arraydata2:[

       ],
       id: null,
       note:'',
       note2:'',
       updated:'',
      }
   }


  body(){
    var x = document.getElementById("body");
    if(x){
        document.getElementById("body").style.width =  document.body.clientWidth+"px";
        document.getElementById("body").style.height =document.documentElement.clientHeight-50+"px";
      }
  }

  nav(){
      var x = document.getElementById("nav");
      if(x){
          document.getElementById("nav").style.width = "249px"
          document.getElementById("nav").style.height =document.documentElement.clientHeight-50+"px";
        }
  }

  note(){
      var x = document.getElementById("note");
      if(x){
          document.getElementById("note").style.width = document.body.clientWidth-250+"px";
          document.getElementById("note").style.height =document.documentElement.clientHeight-50+"px";
        }

        if(document.body.clientWidth <1000 ){
          document.getElementById("note").style.width = "100%";
        }
  }

  note2(){
      var x = document.getElementById("note2");
      if(x){
          document.getElementById("note2").style.width = document.body.clientWidth-250+"px";
          document.getElementById("note2").style.height =document.documentElement.clientHeight-50+"px";
        }
        if(document.body.clientWidth <1000 ){
          document.getElementById("note2").style.width = "100%";
        }
  }

  nen1(){
    var x = document.getElementById("nen1");
    if(x){
        document.getElementById("nen1").style.width = document.body.clientWidth-250+"px";
        document.getElementById("nen1").style.height =150+"px";
        if(document.body.clientWidth <1000 ){
          document.getElementById("nen1").style.width = "100%";
        }
      }
  }

  nen2(){
    var x = document.getElementById("nen2");
    if(x){
        document.getElementById("nen2").style.width = document.body.clientWidth-250+"px";
        document.getElementById("nen2").style.height =150+"px";
      }
      if(document.body.clientWidth <1000 ){
        document.getElementById("nen2").style.width = "100%";
      }
  }

  change(event){
  this.setState({
    note:event.target.value,
  })
  }
  getData(id){
    if(id){
    firebase.database().ref('user/'+id+'/data/').on('value',(snapshot)=>{
      let arraydataClone=snapshot.val();

      if (!arraydataClone.map){
            arraydataClone = Object.keys(arraydataClone).map((k,i)=>arraydataClone[k])
        }

      if(arraydataClone!=null){
        this.setState({
          arraydata:arraydataClone
        })
      }
    })
  }}
  onsubmit(event){
    const updata={
      id:this.state.arraydata.length,
      note2:this.state.note,
    }
    if(updata.note2===""){

    }else {
      firebase.database().ref('user/'+this.state.id+'/data/'+updata.id).set(updata)

    }
    document.getElementById("add").style.display="block";
    document.getElementById("notetext").style.display="none";
    document.getElementById("ipnote").value=null;
console.log(updata);
}

delete(i){
const deletedata={
  id:null,
  note2:null,
}
firebase.database().ref('user/'+this.state.id+'/data/'+i).set(deletedata);
}


change2(event){
this.setState({
  note2:event.target.value,
})
}

getData2(id){
  if(id){
  firebase.database().ref('user/'+id+'/data2/').on('value',(snapshot)=>{
    let arraydataClone2=snapshot.val();

    if (!arraydataClone2.map){
          arraydataClone2 = Object.keys(arraydataClone2).map((k,i)=>arraydataClone2[k])
      }

    if(arraydataClone2!=null){
      this.setState({
        arraydata2:arraydataClone2
      })
    }
  })
}}
onsubmit2(event){
  const updata2={
    id2:this.state.arraydata2.length,
    note3:this.state.note2,
  }
  if(updata2.note3===""){

  }else {
    firebase.database().ref('user/'+this.state.id+'/data2/'+updata2.id2).set(updata2)

  }
  document.getElementById("add2").style.display="block";
  document.getElementById("notetext2").style.display="none";
  document.getElementById("ipnotes").value=null;
}

delete2(i2){
  const deletedata2={
  id2:null,
  note3:null,
  }
  firebase.database().ref('user/'+this.state.id+'/data2/'+i2).set(deletedata2);
}

add(){
  var x = document.getElementById("add");
  if(x){
    document.getElementById("add").style.display="none";
    document.getElementById("notetext").style.display="block";
  }
}

add2(){
  var x = document.getElementById("add2");
  if(x){
    document.getElementById("add2").style.display="none";
    document.getElementById("notetext2").style.display="block";
  }
}

clicktab(){
  document.getElementById("note").style.display="block";
  document.getElementById("note2").style.display="none";
  document.getElementById("muiten").style.display="block";
  document.getElementById("muiten2").style.display="none";
  document.getElementById("header").style.background ="#f4470d";
  if(document.body.clientWidth <1000 ){
    document.getElementById("nav").style.left = "-250px";
      var x = document.getElementById("menu");
      if(x.className==="menu ao"){
        x.className="menu";
      }
  }


}

clicktab2(){
  document.getElementById("note2").style.display="block";
  document.getElementById("note").style.display="none";
  document.getElementById("muiten").style.display="none";
  document.getElementById("muiten2").style.display="block";
  document.getElementById("header").style.background ="#884ddb";
  if(document.body.clientWidth <1000 ){
    document.getElementById("nav").style.left = "-250px";
    var x = document.getElementById("menu");
    if(x.className==="menu ao"){
      x.className="menu";
    }
  }
}



  render() {
    console.log(this.state.arraydata2);
    if(this.props.global.get.uid){
      document.getElementById("body").style.display="block";
      document.getElementById("header").style.width="100%";
      document.getElementById("header").style.height="50px";
    }

    if(this.props.global.get.keyout){
      document.getElementById("body").style.display="none";
      document.getElementById("header").style.width="0";
      document.getElementById("header").style.height="0";
    }

    const xuatnote=this.state.arraydata.map((check,i) => {
      if(!check||check.id===0){
    return null;
      }
      else{
        return(
          <div id="innote" key={i}>
            <div id="innote1" onClick={()=>this.delete(check.id)}><img src={check2}  height="15" width="15" className="check" alt="check2" /></div>
            <div id="innote2" >{check.note2}</div>
          </div>
        )
      }
    })

    const xuatnote2=this.state.arraydata2.map((check2,i2) => {
      if(!check2||check2.id2===0){
    return null;
      }
      else{
        return(
          <div id="innote" key={i2}>
            <div id="innote1" onClick={()=>this.delete2(check2.id2)}><img src={check3}  height="15" width="15" className="check" alt="check3" /></div>
            <div id="innote2" >{check2.note3}</div>
          </div>
        )
      }
    })



      return (
          <div id="body">
              <div id="nav">
                <div className="icon">
                    <div className="iconimg" ><img src={icon1}  height="30" width="30" className="icon1" alt="icon" /></div>
                    <div className="iconT" onClick={this.clicktab.bind(this)}>
                      <div className="texttodo">My Day</div>
                      <div className="imgtodo"><img src={muiten}  height="20" width="10" id="muiten" alt="muiten" /></div>
                      <div className="length">{this.state.arraydata.length-1}</div>

                    </div>
                </div>

                <div className="icon">
                    <div className="iconimg" ><img src={icon2}  height="30" width="30" className="icon1" alt="icon" /></div>
                    <div className="iconT" onClick={this.clicktab2.bind(this)}>
                        <div className="texttodo">To-Do</div>
                        <div className="imgtodo"><img src={muiten}  height="20" width="10" id="muiten2" alt="muiten" /></div>
                          <div className="length">{this.state.arraydata2.length-1}</div>
                    </div>
                </div>

                <div className="icon">
                    <div className="iconimg" ><img src={icon3}  height="30" width="30" className="icon1" alt="icon" /></div>
                    <div className="iconT">
                        <div className="texttodo">Untitled list</div>
                        <div className="imgtodo"><img src={muiten}  height="20" width="10" id="muiten2" alt="muiten" /></div>
                          <div className="length"></div>
                    </div>
                </div>
              </div>

              <div id="note">
                  <div id="nen1">
                    <div className="nennote1">
                      <div className="nennote2"><h1>My Day</h1></div>
                      <div className="nennote3"><hr/></div>
                    </div>
                  </div>

                  <div>{xuatnote}</div>

                  <div id="addnote">
                      <div id="add" onClick={this.add.bind(this)}>
                          <div id="inputnote" ><h2>+</h2></div>
                          <div className="addtext">Add a to-do</div>
                      </div>
                      <div id="notetext" >
                          <input className="ipnote" id="ipnote" type="text" placeholder="Hôm nay bạn muốn làm gì..." onChange={this.change.bind(this)}/>
                          <div className="ipnote2"><div className="ipnote3" onClick={this.onsubmit.bind(this)}>Save</div></div>
                      </div>
                  </div>
              </div>



              <div id="note2">
                  <div id="nen2">
                    <div className="nennote1">
                      <div className="nennote2"><h1>To-Do</h1></div>
                      <div className="nennote3"><hr/></div>
                    </div>
                  </div>

                  <div>{xuatnote2}</div>

                  <div id="addnote">
                      <div id="add2" onClick={this.add2.bind(this)}>
                          <div id="inputnote2" ><h2>+</h2></div>
                          <div className="addtext">Add a to-do</div>
                      </div>
                      <div id="notetext2" >
                          <input className="ipnote"  id="ipnotes" type="text" placeholder="Tạo ghi chú..."  onChange={this.change2.bind(this)} />
                            <div className="ipnote2"><div className="ipnote3" onClick={this.onsubmit2.bind(this)}>Save</div></div>
                      </div>
                  </div>
              </div>

          </div>
      )
  }

}
