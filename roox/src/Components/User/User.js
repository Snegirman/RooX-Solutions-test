import Button from "../Aside/Button";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "../../App/Reducers/cards";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"

export default function User () {

    const { loading, entities } = useSelector (state => state.cards);
    let { userId } = useParams();
    const dispatch = useDispatch();
    let [cantEdit, setCantEdit] = useState(true);
    let currentUser;
    const commentInput = useRef(null);
    
    let textarea = cantEdit ? 
    <textarea onChange={(e) => controlCommentInput(e)} ref={commentInput} readOnly id="userTextarea"></textarea> : 
    <textarea onChange={(e) => controlCommentInput(e)} ref={commentInput} id="userTextarea"></textarea>
    

    const [ userNameData, setUserNameData ] = useState();
    const [ canSendInfoUserName, setCanSendInfoUserName ] = useState(true);
    const [ emailData, setEmailData ] = useState();
    const [ canSendInfoEmail, setCanSendInfoEmail ] = useState(true);
    const [ streetData, setStreetData] = useState();
    const [ canSendInfoStreet, setCanSendInfoStreet ] = useState(true);
    const [ nameData, setNameData ] = useState();
    const [ canSendInfoName, setCanSendInfoName ] = useState(true);
    const [ cityData, setCityData ] = useState();
    const [ canSendInfoCity, setCanSendInfoCity ] = useState(true);
    const [ zipCodeData, setZipCodeData ] = useState();
    const [ canSendInfoZipCode, setCanSendInfoZipCode ] = useState(true);
    const [ phoneData, setPhoneData ] = useState();
    const [ canSendInfoPhone, setCanSendInfoPhone ] = useState(true);
    const [ webSiteData, setWebSiteData ] = useState();
    const [ canSendInfoWebSite, setCanSendInfoWebSite ] = useState(true);
    const [ commentData, setCommentData ] = useState();
    
    const controlCommentInput = (e) => {
        setCommentData(commentInput.current.value)
    }

    function makeEditable() {
        setCantEdit(false);
    }

    function collectUserInfoHandler(setter, state) {
        setter(state);
    }

    useEffect(() => {
        dispatch(getCards())
    }, [dispatch])

    entities.forEach(element => {
        if (element.id === +userId) {
            currentUser = element;
        }
    });

    function sendForm (e) {
        e.preventDefault();
        
        if (canSendInfoUserName &&
            canSendInfoEmail &&
            canSendInfoStreet &&
            canSendInfoName &&
            canSendInfoCity &&
            canSendInfoZipCode &&
            canSendInfoPhone &&
            canSendInfoWebSite
            ) {
            let redactedCurrentUser = {
                userName: userNameData,
                email: emailData,
                street: streetData,
                name: nameData,
                city: cityData,
                zipCode: zipCodeData,
                phone: phoneData,
                webSite: webSiteData,
                comment: commentData
                }
            console.log(JSON.stringify(redactedCurrentUser));
        } else {
            console.log('Не заполнены обязательные поля')
        }
    }


    if (loading) {
        return (
            <div className="user">
            <div className="user__header">
                <div className="user__header-name">Профиль пользователя</div>
                <Button click={makeEditable} class="user__header-btn" title="Редактировать"/>
            </div>
            <div className="loading">Загрузка...</div>
        </div>
        );
    }
    
    return (
        <div className="user">
            <div className="user__header">
                <div className="user__header-name">Профиль пользователя</div>
                <Button click={makeEditable} class="user__header-btn" title="Редактировать"/>
            </div>
            <form>
            <div className="user__data">
                <Input collectUserInfo={collectUserInfoHandler} sendSetter={setCanSendInfoUserName} setter={setUserNameData} readonly={cantEdit} name="User name" type="text" id="userName" value={currentUser.username} class="user__data-container"/>
                <Input collectUserInfo={collectUserInfoHandler} sendSetter={setCanSendInfoEmail} setter={setEmailData} readonly={cantEdit} name="E-mail" type="email" id="email" value={currentUser.email} class="user__data-container"/>
                <Input collectUserInfo={collectUserInfoHandler} sendSetter={setCanSendInfoStreet} setter={setStreetData} readonly={cantEdit} name="Street" type="text" id="street" value={currentUser.address.street} class="user__data-container"/>
                <Input collectUserInfo={collectUserInfoHandler} sendSetter={setCanSendInfoName} setter={setNameData} readonly={cantEdit} name="Name" type="text" id="name" value={currentUser.name} class="user__data-container"/>
                <Input collectUserInfo={collectUserInfoHandler} sendSetter={setCanSendInfoCity} setter={setCityData} readonly={cantEdit} name="City" type="text" id="city" value={currentUser.address.city} class="user__data-container"/>
                <Input collectUserInfo={collectUserInfoHandler} sendSetter={setCanSendInfoZipCode} setter={setZipCodeData} readonly={cantEdit} name="Zip code" type="text" id="zipCode" value={currentUser.address.zipcode} class="user__data-container"/>
                <Input collectUserInfo={collectUserInfoHandler} sendSetter={setCanSendInfoPhone} setter={setPhoneData} readonly={cantEdit} name="Phone" type="tel" id="phone" value={currentUser.phone} class="user__data-container"/>
                <Input collectUserInfo={collectUserInfoHandler} sendSetter={setCanSendInfoWebSite} setter={setWebSiteData} readonly={cantEdit} name="Website" type="text" id="website" value={currentUser.website} class="user__data-container"/>
                <div className="user__data-container">
                    <label htmlFor="userTextarea">Comment</label>
                    {textarea}
                </div>
            </div>
                <div className="user__submit-btn-container">
                    <Button click={sendForm} class="user_submit-btn" title="Отправить"/>
                </div>
            </form>
        </div>
    )
}