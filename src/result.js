export const Result = ({ result }) => {
  return (
    <div class="result">
      <div>
        <a href={'https://bittrex.com/Market/Index?MarketName='+result.MarketName} target="_blank">
          {result.MarketName}
        </a>
      </div>
      <p>
          <b>BID:</b> {result.Bid}
      </p>
        <p>
            <b>ASK:</b> {result.Ask}
        </p>
        <p>
            <b>VOL:</b> {result.BaseVolume}
        </p>


    </div>
  );
};
