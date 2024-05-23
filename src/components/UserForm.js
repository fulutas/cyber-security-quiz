import React, { useState } from 'react'
import { Button, Group, Radio, TextInput } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Quiz from './Quiz/Quiz';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api/endpoints';
import Swal from 'sweetalert2';

const UserForm = () => {
  const [quizStatus, setQuizStatus] = useState("intro");
  const [userInfo, setUserInfo] = useState(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["user-form"],
    enabled: false,
    refetchOnWindowFocus: false,
    queryFn: () => fetchCheckEmail()
  })

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      surname: '',
      email: '',
      gender: '',
      age: ''
    },
    validate: {
      name: (value) => value.length === 0 ? "Bu alan zorunludur." : null,
      surname: (value) => value.length === 0 ? "Bu alan zorunludur." : null,
      gender: (value) => value.length === 0 ? "Bu alan zorunludur." : null,
      age: (value) => value.length === 0 ? "Bu alan zorunludur." : null,
      email: (value) => {
        if (value.length === 0) {
          return "Bu alan zorunludur.";
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)) {
          return "Hatalı email formatı!";
        }
        return null;
      },
    },
  });

  const quizStart = async (values) => {
    try {
      const { data } = await refetch();

      if (isError || !data === undefined) {
        return Swal.fire({
          title: 'Hata!',
          text: 'Beklenmedik bir hata oluştu.',
          icon: 'error',
          confirmButtonText: 'Kapat'
        })
      }

      if (data === true) {
        return Swal.fire({
          title: 'Uyarı',
          text: 'Bu email daha önce kullanılmış. Farklı bir email ile deneyiniz.',
          icon: 'warning',
          confirmButtonText: 'Kapat'
        })
      }

      if (data === false) {
        setQuizStatus("started")
        setUserInfo(values)
      }
    } catch (error) {
      Swal.fire({
        title: 'Hata!',
        text: 'Beklenmedik bir hata oluştu.',
        icon: 'error',
        confirmButtonText: 'Kapat'
      });
    }
  }

  async function fetchCheckEmail() {
    try {
      const response = await fetch(`${api.CheckEMail}${form.getValues().email}`);
      if (!response.ok) {
        const errorCode = response.status;
        throw new Error(`An error occurred: ${errorCode}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  };


  return (
    <>
      {quizStatus === "intro" ? (
        <section className="flex items-center justify-center flex-col mt-10">
          <h2 className="text-3xl font-semibold leading-none tracking-tight text-white">
            Kullanıcı Bilgi Formu
          </h2>
          <div className="grid w-full max-w-sm items-center gap-2 mt-5 text-white">
            <form className="flex flex-col gap-4" onSubmit={form.onSubmit((values) => quizStart(values))}>
              <TextInput
                withAsterisk
                label="Adınız"
                placeholder="Adınız"
                size="lg"
                key={form.key('name')}
                {...form.getInputProps('name')}
              />
              <TextInput
                withAsterisk
                label="Soyadınız"
                placeholder="Soyadınız"
                size="lg"
                key={form.key('surname')}
                {...form.getInputProps('surname')}

              />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                size="lg"
                type='mail'
                key={form.key('email')}
                {...form.getInputProps('email')}
              />
              <NumberInput
                withAsterisk
                label="Yaş"
                placeholder="Yaş"
                size="lg"
                min={10}
                max={70}
                key={form.key('age')}
                {...form.getInputProps('age')}
              />
              <Radio.Group
                withAsterisk
                label="Cinsiyet"
                size="lg"
                key={form.key('gender')}
                {...form.getInputProps('gender')}
              >
                <Group mt="xs">
                  <Radio value="male" label="Erkek" />
                  <Radio value="female" label="Kadın" />
                </Group>
              </Radio.Group>
              <Button
                className='mt-3'
                type="submit"
                variant="gradient"
                fullWidth
                loading={isLoading}
                disabled={isLoading}
                size='md'
                gradient={{ from: 'rgba(49, 145, 62, 1)', to: 'lime', deg: 24 }}
              >
                Başla!
              </Button>
            </form>
          </div>
        </section>
      ) : <Quiz quizStatus={quizStatus} setQuizStatus={setQuizStatus} userInfo={userInfo} />}
    </>
  )
}

export default UserForm