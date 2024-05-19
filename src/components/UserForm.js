import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Group, Radio, TextInput } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const UserForm = () => {
  const navigate = useNavigate();

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

  const quizStart = (values) => {
    navigate("/quiz", { state: { userInfo: values } })
  }

  return (
    <section className="flex items-center justify-center flex-col mt-10">
      <h2 className="text-2xl font-semibold leading-none tracking-tight">
        Kullanıcı Bilgi Formu
      </h2>
      <div className="grid w-full max-w-sm items-center gap-2 mt-5">
        <form className="flex flex-col gap-2" onSubmit={form.onSubmit((values) => quizStart(values))}>
          <TextInput
            withAsterisk
            label="Adınız"
            placeholder="Adınız"
            size="md"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            label="Soyadınız"
            placeholder="Soyadınız"
            size="md"
            key={form.key('surname')}
            {...form.getInputProps('surname')}

          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            size="md"
            type='mail'
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <NumberInput
            withAsterisk
            label="Yaş"
            placeholder="Yaş"
            size="md"
            min={10}
            max={70}
            key={form.key('age')}
            {...form.getInputProps('age')}
          />
          <Radio.Group
            withAsterisk
            label="Cinsiyet"
            size="md"
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
            size='md'
            gradient={{ from: 'rgba(49, 145, 62, 1)', to: 'lime', deg: 24 }}
          >
            Başla!
          </Button>
        </form>
      </div>
    </section>
  )
}

export default UserForm