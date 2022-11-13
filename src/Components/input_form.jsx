const InputForm = () => {
  const submitted = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7e5f49fc13msh17d5fcd6a510b96p1d07afjsnee858c4eef94",
        "X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
      },
    };
  
    fetch("https://ronreiter-meme-generator.p.rapidapi.com/images", options)
      .then((response) => response.json())
      .then((response) => console.log("This Happened"))
      .catch((err) => console.error(err));
    console.log(options);
    alert("This...!!");
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
