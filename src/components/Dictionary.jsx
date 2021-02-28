import React from "react";

function Dictionary(props){
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emojiImg}
            </span>
            <span>{props.emojiName}</span>
          </dt>
          <dd>
            {props.emojiMean}
          </dd>
        </div>
    );
}

export default Dictionary;