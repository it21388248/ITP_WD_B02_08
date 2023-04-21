import React,{ Component} from 'react';
import axios from 'axios';

export default class AddTicket extends Component{

  constructor(props){
    super(props);
    this.state={
      Rnumber:"",
      subject:"",
      issueDate:"",
      details:""
    }
  }

  handleInputChange=(e)=>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit= (e) =>{
    e.preventDefault();

    const {Rnumber,subject,issueDate,details}=this.state;
    const data={
      Rnumber:Rnumber,
      subject:subject,
      issueDate:issueDate,
      details:details
    }
    console.log(data)
    axios.post("http://localhost:9090/ticket/save",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
            Rnumber:"",
            subject:"",
            issueDate:"",
            details:""
          }
        )
      }
    })
  }
  render(){
    return(
    
<div>
          <br></br>
<div>
<h3 class="text-3xl font-bold dark:text-white" style={{marginLeft:'20px'}}>Create New Ticket</h3>
</div>

<form style={{padding: '50px'}} >
  <div class="mb-6">
    <label for="Rnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Student Id</label>
    <input type="text" id="Rnumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="Rnumber"
              placeholder="Enter Student id"
              value={this.state.Rnumber}
              onChange={this.handleInputChange} required></input>
  </div>
  <div class="mb-6">
    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            name="subject"
            placeholder="Enter subject"
            value={this.state.subject}
            onChange={this.handleInputChange}required></input>
  </div>
  
  <div class="mb-6">
    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Issue Found Date</label>
    <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      name="issueDate"
      placeholder="Enter Date"
      value={this.state.issueDate}
      onChange={this.handleInputChange}required></input>
  </div>

  <div class="mb-6">
  <label for="details" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
   <textarea id="details" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     name="details"
     placeholder="Enter Details"
     value={this.state.details}
     onChange={this.handleInputChange} required></textarea>
  </div>

  

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={this.onSubmit}>Submit</button>
</form>


         
          
        </div>
    )
  }
}
