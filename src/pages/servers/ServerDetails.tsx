const ServerDetails = (
  { serverDetails }: any,
  { serverPlayerDetails }: any
) => {
  const getTimePlayed = (tp: number) => {
    let hour = Math.floor(tp / 3600);
    let minute = Math.floor((tp % 3600) / 60);
    let second = Math.floor((tp % 3600) % 60);

    let hourDisplay =
      hour > 0 ? hour + (hour === 1 ? " hour, " : " hours, ") : "";
    let minuteDisplay =
      minute > 0 ? minute + (minute === 1 ? " minute, " : " minutes, ") : "";
    let secondDisplay =
      second > 0 ? second + (second === 1 ? " second" : " seconds") : "";

    return hourDisplay + minuteDisplay + secondDisplay;
  };

  return (
    <div>
      <ul>
        <li>IP: {serverDetails.svConnect}</li>
        <li>Name: {serverDetails.svName}</li>
        <li>Map: {serverDetails.svMapname}</li>
        <li>
          Players: {serverDetails.svNumplayers} / {serverDetails.svMaxplayers}
          <ul>
            {serverDetails.svPlayers.map((value: any, index: number) => (
              <li key={index}>
                Name: {value.name} - Score: {value.raw.score} - Time:{" "}
                {getTimePlayed(value.raw.time)}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ServerDetails;
