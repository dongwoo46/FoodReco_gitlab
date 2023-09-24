import React, { useState } from 'react';
import StyledIdInputIcon from '../../components/inputs/StyledIdInputIcon';
import StyledPwInputIcon from '../../components/inputs/StyledPwInputIcon';
import StyledButton from '../../styles/StyledButton';
import classes from './Login.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsSquare } from 'react-icons/bs';
import { BsFillCheckSquareFill } from 'react-icons/bs';

interface IForm {
  email: string;
  password: string;
}

export const Login = () => {
  const [isAutoLogin, setIsAutoLogin] = useState(0);
  const [isRememberId, setIsRememberId] = useState(0);

  const {
    register,
    formState: { errors, isSubmitting, isSubmitted },
    handleSubmit,
    control,
  } = useForm<IForm>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin: SubmitHandler<IForm> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <div className={classes.container}>
      <br />
      <div>
        <img
          src="images/foodreco.png"
          alt="sdsd"
          width={'200rem'}
          height={'100rem'}
        />
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className={classes.inputContainer}>
          {errors.email && (
            <small role="alert" style={{ color: 'red', fontSize: '10px' }}>
              {errors.email.message}
            </small>
          )}
          {/* 이메일 입력창 */}
          <StyledIdInputIcon
            name="email" // 필드의 이름
            placeholder="이메일"
            control={control} // useForm에서 가져온 control
            rules={{
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식에 맞지 않습니다.',
              },
            }}
          />

          {errors.password && (
            <small role="alert" style={{ color: 'red', fontSize: '10px' }}>
              {errors.password.message}
            </small>
          )}

          {/* 비밀번호 입력창 */}
          <br />
          <StyledPwInputIcon
            name="password"
            placeholder="비밀번호"
            control={control}
            rules={{
              minLength: {
                value: 8,
                message: '8자리 이상 비밀번호를 사용하세요.',
              },
            }}
            aria-invalid={
              isSubmitted ? (errors.password ? 'true' : 'false') : undefined
            }
          />
        </div>

        <div className={classes.autoLoginContainer}>
          {isAutoLogin ? (
            <BsFillCheckSquareFill
              style={{
                height: '17px',
                width: '17px',
                marginLeft: '8px',
                color: '#FE9D3A',
              }}
              onClick={() => {
                setIsAutoLogin(0);
              }}
            />
          ) : (
            <BsSquare
              color="#C6C5C5"
              style={{ height: '17px', width: '17px', marginLeft: '8px' }}
              onClick={() => {
                setIsAutoLogin(1);
              }}
            />
          )}
          &nbsp;
          <span style={{ fontSize: '13px', color: '#C6C5C5' }}>
            자동 로그인
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {isRememberId ? (
            <BsFillCheckSquareFill
              style={{
                height: '17px',
                width: '17px',
                marginLeft: '5px',
                color: '#FE9D3A',
              }}
              onClick={() => {
                setIsRememberId(0);
              }}
            />
          ) : (
            <BsSquare
              color="#C6C5C5"
              style={{ height: '17px', width: '17px', marginLeft: '5px' }}
              onClick={() => {
                setIsRememberId(1);
              }}
            />
          )}
          &nbsp;
          <span style={{ fontSize: '13px', color: '#C6C5C5' }}>
            아이디 저장
          </span>
        </div>
        <br />
        <br />
        <StyledButton disabled={isSubmitting} type="submit" width="18.8125rem">
          로그인
        </StyledButton>
      </form>
      <div>
        <p style={{ color: '#918C8C', fontWeight: 700 }}>회원가입</p>
      </div>
    </div>
  );
};