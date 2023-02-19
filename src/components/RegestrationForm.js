



export const  RegestrationForm = () => {
    state = {
        email: '',
        password: '',
       };
       handleChange  = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
            }

            handleSubmit = (e) => {
                e.preventDefault()
                const {email, password} = this.state
                this.props.onAddContacts({email, password})
                  this.reset();
                 
               }
               reset = () => {
                this.setState({email: '', password: '' })
              }

return (
<div>
<form>
    <input
    type="email"
    name="email"
     placeholder="E-mail"
     onChange={handleChange}
     value={this.state.email}
    ></input>


    <input
       type="password"
       name="password"
       placeholder="password"
       onChange={handleChange}
     velue={this.state.password}
    ></input>

<batton   type="submit">РЕЄСТРАЦІЯ</batton>
<batton  type="submit">ВХІД</batton>
</form>

</div>
)

}




