import { Button, Link } from '@chakra-ui/react'
import React from 'react'

const PayButton = ({ option }: { option: 'momo' | 'paypal' }) => {
  if (option === 'momo') {
    return (
      <Link href="https://paystack.com/pay/firstlovecenter">
        <Button colorScheme="yellow" size="lg">
          Give With Mobile Money/Card
        </Button>
      </Link>
    )
  }
  if (option === 'paypal') {
    return (
      <Link href="https://www.paypal.com/donate/?hosted_button_id=E39VFZ8AR3FBW&source=qr">
        <Button colorScheme="twitter" size="lg" marginBottom={10}>
          Give with PayPal
        </Button>
      </Link>
    )
  }
  return null
}

export default PayButton
