import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';

const App = () => {

    return (


        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail image={faker.image.avatar()} author="Sam" date="Today at 4:45PM" comment="Nice blog post!"/>
            </ApprovalCard>
            
            
            <ApprovalCard>
                <CommentDetail image={faker.image.avatar()} author="Alex" date="Today at 2:00AM" comment="Nice blog post!" />
            </ApprovalCard>
            
            <CommentDetail image={faker.image.avatar()} author="Jane" date="Yesterday at 5:00PM" comment="Nice blog post!" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));