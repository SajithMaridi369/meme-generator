

const InputForm = () => {
  let arr;
  const submitted = async () => {
    
    arr = await fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <form>
        <div className="container">
          <div className="inpt-cont">
            <input className="inpts" type="text" placeholder="Text 1"/>
            <input className="inpts" type="text" placeholder="Text 2"/>
          </div>
          <div>
            <button onClick={submitted()} className="btn"> Generate New Meme </button>
          </div>
        </div>
      </form>
    </div>
  );
}; 

export default InputForm;
