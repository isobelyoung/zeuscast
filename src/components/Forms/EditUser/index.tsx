import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setIsModalOpen } from '../../../store/reducers/appReducer';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {
    Button,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { USER_FORM } from '../../../constants';
import { Gender } from '../../../types';
import '../index.scss';
import { setUsers } from '../../../store/reducers/usersReducer';
import axios from 'axios';
import { RootState } from '../../../store';

const EditUser = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genderOptions = Object.values(Gender);
    const { id } = useParams();
    console.log(id);

    const { userDetails } = useSelector((state: RootState) => state.users)
    const defaultValues = userDetails.find((user) => user.id === id);

    const schema = yup
        .object({
            gender: yup.string<Gender>().required(),
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            age: yup.number().when('gender', {
                is: Gender.Male,
                then: (schema) => schema.max(111).min(18).required(),
                otherwise: (schema) => schema.max(117).min(18).required()
            })
        })
        .required();

    const {
        handleSubmit,
        register,
        getValues,
        formState: { isValid, errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValues,
    });

    // change on submit
    const onSubmit = async (values: any) => {
        if ( isValid ) {
            try {
                const res = await axios.patch(`/api/users/${id}`, values);
                const allUsers = await axios('/api/users');
                dispatch(setUsers(allUsers.data.users));
            } catch (error) {
                // would ideally incorporate proper error handling
                console.log(error);
            }
            dispatch(setIsModalOpen(false));
        }
    };

    const closeModal = () => {
        dispatch(setIsModalOpen(false));
        navigate('/users');
    };

    return (
        <div className='p-2'>
            <div className='d-flex space-between pb-1'>
                <h2>{USER_FORM.HEADING.EDIT}</h2>
                <IconButton aria-label='close-form' onClick={closeModal}>
                    <CloseIcon color='inherit' fontSize='medium' />
                </IconButton>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='custom-form'>
                <div className='input-group'>
                    <label htmlFor='gender'>{USER_FORM.FIELDS.GENDER}</label>
                    <select
                        id='gender'
                        {...register('gender')}
                        aria-errormessage='gender-field-error'
                        className={errors?.gender && 'input-error'}
                    >
                        <option value=''>Select</option>
                        {genderOptions.map((option) => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    {errors?.gender?.type === 'required' && (
                        <p
                            className='input-error-message'
                            id='gender-field-error'
                        >
                            {USER_FORM.ERROR.REQUIRED}
                        </p>
                    )}
                </div>
                <div className='input-group'>
                    <label htmlFor='firstName'>
                        {USER_FORM.FIELDS.FIRST_NAME}
                    </label>
                    <input
                        id='firstName'
                        {...register('firstName')}
                        aria-errormessage='firstname-field-error'
                        className={errors?.firstName ? 'input-error' : ''}
                    />
                    {errors?.firstName?.type === 'required' && (
                        <p
                            className='input-error-message'
                            id='firstname-field-error'
                        >
                            {USER_FORM.ERROR.REQUIRED}
                        </p>
                    )}
                    {errors?.firstName?.type === 'minLength' && (
                        <p
                            id='firstname-field-error'
                            className='input-error-message'
                        >{`First ${USER_FORM.ERROR.NAME_MIN_LENGTH}`}</p>
                    )}
                    {errors?.firstName?.type === 'maxLength' && (
                        <p
                            id='firstname-field-error'
                            className='input-error-message'
                        >{`First ${USER_FORM.ERROR.NAME_MAX_LENGTH}`}</p>
                    )}
                </div>
                <div className='input-group'>
                    <label htmlFor='lastName'>
                        {USER_FORM.FIELDS.LAST_NAME}
                    </label>
                    <input
                        id='lastName'
                        {...register('lastName')}
                        aria-errormessage='lastname-field-error'
                        className={errors?.lastName ? 'input-error' : ''}
                    />
                    {errors?.lastName?.type === 'required' && (
                        <p
                            className='input-error-message'
                            id='lastname-field-error'
                        >
                            {USER_FORM.ERROR.REQUIRED}
                        </p>
                    )}
                    {errors?.lastName?.type === 'maxLength' && (
                        <p
                            id='lastname-field-error'
                            className='input-error-message'
                        >{`Last ${USER_FORM.ERROR.NAME_MAX_LENGTH}`}</p>
                    )}
                    {errors?.lastName?.type === 'minLength' && (
                        <p
                            id='lastname-field-error'
                            className='input-error-message'
                        >{`Last ${USER_FORM.ERROR.NAME_MIN_LENGTH}`}</p>
                    )}
                </div>
                <div className='input-group'>
                    <label htmlFor='age'>{USER_FORM.FIELDS.AGE}</label>
                    <input
                        id='age'
                        {...register('age')}
                        aria-errormessage='age-field-error'
                        className={errors?.age ? 'input-error' : ''}
                    />
                    {errors?.age?.type === 'required' && (
                        <p className='input-error-message' id='age-field-error'>
                            {USER_FORM.ERROR.REQUIRED}
                        </p>
                    )}
                    {errors?.age?.type === 'min' && (
                        <p className='input-error-message' id='age-field-error'>
                            {USER_FORM.ERROR.AGE_MIN}
                        </p>
                    )}
                    {errors?.age?.type === 'max' && (
                        <p className='input-error-message' id='age-field-error'>
                            {USER_FORM.ERROR.AGE_MAX}
                        </p>
                    )}
                </div>
                <div className='dialog-actions'>
                    <Button
                        onClick={closeModal}
                        variant='outlined'
                        color='inherit'
                    >
                        {USER_FORM.BUTTON.CANCEL}
                    </Button>
                    <Button
                        type='submit'
                        variant='contained'
                        className='custom-button-filled-dark primary'
                        onClick={() => onSubmit(getValues())}
                    >
                        {USER_FORM.BUTTON.SAVE}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
