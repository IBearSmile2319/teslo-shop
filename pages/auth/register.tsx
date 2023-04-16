import { AuthLayout } from '@/components/layouts'
import NextLink from 'next/link'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'

const RegisterPage = () => {
  return (
    <AuthLayout
        title={`Crear una cuenta`}
    >
        <Box sx={{
            width: 350,
            padding: '10px 20px',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h1" component="h1">
                        Crear una cuenta
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Nombre completo" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Correo electrónico" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Contraseña" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color="secondary" className="circular-btn" size="large" fullWidth>
                        Registrarse
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Link component={NextLink} href="/auth/login" underline="always">
                        ¿Ya tienes una cuenta? Ingresar
                    </Link>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage