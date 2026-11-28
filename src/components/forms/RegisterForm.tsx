import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type RegisterFormData,
  registerSchema,
} from '@/schemas/register.schema';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { register as registerUser } from '@/services/api/auth/register';
import { Link, useNavigate } from '@tanstack/react-router';
import { Checkbox } from '@/components/ui/checkbox';
import { CircleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    defaultValues: { name: '', email: '', password: '', venueManager: false },
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const onFormSubmit = async (data: RegisterFormData) => {
    const result = await registerUser(data);
    if (!result.success) {
      setError('root', { message: result.error });
    } else {
      await navigate({ to: '/login' });
    }
  };

  return (
    <div className="flex flex-col mx-auto w-full max-w-md">
      <Card className="bg-secondary">
        <CardContent>
          <form id="register-user-form" onSubmit={handleSubmit(onFormSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-name">Name</FieldLabel>
                    <Input
                      {...field}
                      id="register-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your name"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="register-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your email ending with @stud.noroff.no"
                      type="email"
                      autoComplete="email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="register-password">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="register-password"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your password"
                      type="password"
                      autoComplete="new-password"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="venueManager"
                control={control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    orientation="horizontal"
                  >
                    <Checkbox
                      id="register-venue-manager"
                      name={field.name}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FieldContent>
                      <FieldLabel
                        htmlFor="register-venue-manager"
                        className="font-normal"
                      >
                        Create account as venue manager
                      </FieldLabel>
                      <FieldDescription>
                        You can list and manage your own venues
                      </FieldDescription>
                    </FieldContent>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            {errors.root?.message && (
              <p
                role="alert"
                className="flex items-center gap-2 mt-4 text-destructive"
              >
                <CircleAlert className="size-4" aria-hidden="true" />
                {errors.root.message}
              </p>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-6  w-full"
            >
              {isSubmitting ? 'Creating account…' : 'Create account'}
            </Button>
          </form>
          <div className="flex items-center pt-2">
            <p className="pt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-primary underline">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
