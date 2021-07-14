import React, {useState} from "react"
import "./Upload.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinearProgress from '@material-ui/core/LinearProgress'
import {storage, db} from "../firebase/Firebase";
import {useSelector} from "react-redux";
import {selectUser} from "../user/userSlice";
import firebase from "firebase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const Upload = () => {
    const [caption, setCaption] = useState('')
    const [progress, setProgress] = useState(0)
    const [img, setImg] = useState(undefined)
    const user = useSelector(selectUser)
    const handleChange = (e) => {
        if(e.target.files[0]){
            setImg(e.target.files[0])
        }
    }
    const handleUpload = (e) => {
        e.preventDefault()
        const upload = document.querySelector('.upload')
        upload.classList.add('uploading')
        const uploadTask = storage.ref(`images/${img.name}`).put(img)
        // For progress bar
        uploadTask.on(
            "state_change",
            (snapshot) => {
                // progress
                const p = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                )
                setProgress(p)
            },
            (error) => {
                // error
                console.log(error)
                alert(error.message)
            },
            () => {
                // complete
                storage.ref('images')
                    .child(img.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            username: user.displayName,
                            caption: caption,
                            imageURL: url,
                            comments: []
                        })
                        setCaption('')
                        setProgress(0)
                        setImg(undefined)
                        upload.classList.remove('uploading')
                    })
            }
        )
    }
    return(
        user === undefined ?
            <Card className={'upload'}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Sorry, you need to log in.
                    </Typography>
                </CardContent>
            </Card>
            :
            <form className={'upload'}>
                <div className={'upload__img'}>
                    <label className={'upload__img__btnUpload'} htmlFor="upload-photo">
                        <input
                            style={{ display: 'none' }}
                            id="upload-photo"
                            type="file"
                            onChange={handleChange}
                        />
                        <Button color="secondary" variant="contained" component="span">
                            Upload Image
                        </Button>
                    </label>
                    <LinearProgress className={'upload__img__progressBar'} value={progress}
                                    variant="determinate"
                    />
                </div>
                <TextField
                    className={'upload__caption'}
                    label="Caption"
                    multiline
                    value={caption}
                    onChange={e=>setCaption(e.target.value)}
                />
                <Button disabled={!caption} type={'submit'} className={'upload__btn'} variant="contained" onClick={handleUpload}>Post</Button>
            </form>
    )
}