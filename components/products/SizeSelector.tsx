import { ISize } from '@/interfaces'
import { Box, Button } from '@mui/material';
import React from 'react'

interface SizeSelectorProps {
    selectedSize?: ISize;
    sizes: ISize[];
}

const SizeSelector = ({ selectedSize, sizes }: SizeSelectorProps) => {
  return (
    <>
    <Box>
        { 
            sizes.map((size, index) => (
                <Button 
                    key={index}
                    size="small"
                    color={selectedSize === size ? 'primary' : 'info'}
                    >
                    {size}
                    </Button>
            ))
        }
    </Box>
    </>
  )
}

export default SizeSelector