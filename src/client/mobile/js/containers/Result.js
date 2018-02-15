import React, {Component} from 'react'
import Header from "../components/header";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../store/actions";

class Result extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isMoving: false
        };

        this.handleClickButton = ::this.handleClickButton;
        this.handleClickFixedButton = ::this.handleClickFixedButton;
    }

    handleClickButton() {
        this.props.handleClear();
        this.props.history.push("/");
    }

    handleClickFixedButton() {
        this.props.history.push('/recommended');
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={"content result"}>
                    <div className={"content-explain result"}>
                        <span>
                            고객님께 맞는 사이즈는
                        </span>
                    </div>
                    <div className={"result"}>
                        <div className={"oval"}>
                            <span className={"label label-en label-large"}>M</span>
                            <span className={"label label-en"}>SIZE</span>
                        </div>
                        <div className={"result-explain"}>
                            고객님과 비슷한 키, 체중, 선호하는 핏을 가진
                            사람들이 거의 같은 비율로 M과 S 사이즈를
                            구매했습니다.
                        </div>
                        <div className={"button"} onClick={() => {this.handleClickButton()}}>
                            <button>다시 시작하기</button>
                        </div>
                        <div className={`fixed-button ${this.state.isMoving ? "hide" : ""}`}
                             onClick={() => {this.handleClickFixedButton()}}>
                            <span className={"label"}>맞는 옷 찾으러 가기</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClear: () => {
            dispatch(actions.setInitialState());
        },
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Result));