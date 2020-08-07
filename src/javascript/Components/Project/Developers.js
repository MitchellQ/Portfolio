import React from 'react';

export default class Developers extends React.Component {

    render() {return (
            <React.Fragment>
                <h4 className="text-center">Developers</h4>
                <div className="card dev-profile">
                    <ul className="list-group list-group-flush">                    
                        {
                            this.props.developers.map((developer, key) => {
                                return <DevItem dev={developer} key={key} />
                            })
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

class DevItem extends React.Component {
    getImgUrl(s) {
        return s.replace(/ /g, '').replace('.', '').toLowerCase();
    }

    render() {
        const { dev } = this.props;
       
        return (
            <li className="list-group-item">
                <img className="rounded-circle" src={`https://github.com/${dev.github}.png`} alt={`${dev.name}'s profile pic`} />
                <span className="ml-2">{dev.name}</span>
                
                <div className="float-right">
                    <a href={dev.linkedin} target="_blank" rel="noopener">
                        <i className="fab fa-github"/>
                    </a>
                    <a className="px-2" href={`https://github.com/${dev.github}`} target="_blank" rel="noopener">
                        <i className="fab fa-linkedin-in"/>
                    </a>
                </div>
            </li>
        )
    }
}