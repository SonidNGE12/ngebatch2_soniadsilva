export default function Greet()
{
    return <h2>Welcome to React Components</h2>;
}

export const getQuote = () => <h4>Everything is possible. All Power is in YOU!!!</h4>
export const Hello = () : JSX.Element => 
{
    const emp = { id: 100, name: 'June', skills: ['Java', 'React', 'Javascript'] };
    
    const getGreeting = (user?: string) : JSX.Element=> 
    {
        if (user)
            return <div>Hello {user}</div>
        else
            return <div>Hello Stranger</div>;
    }
    
    const showCart = () =>
    { 
        const cart = ["Books", "Toys", "Groceries"];
        return cart.length > 0 ? (<table style = {{border: "1px solid"}}> 
          <thead>
            <tr>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )
            : <p>Cart is empty</p>;
        
    }

return (
  <>
    <p>{getQuote()}</p>;<p>{emp.skills}</p>;
    <ul>
      {emp.skills.map((skill) => (
        <li>{skill}</li>
      ))}
    </ul>
    <p>{"Hello " + emp.name}</p>
    {showCart()}
    <p>{getGreeting(emp.name)}</p>
    <p>{getGreeting()}</p>
    <p>
        {
            emp.skills.length > 0 
                ? "Employee has " + emp.skills.length + " skills"
                : "Employee has no skills"
        }
    </p>
    <p>
            {emp.skills.length > 1 && "Employee has to give an assessment"}  
    </p>
  </>
);
}