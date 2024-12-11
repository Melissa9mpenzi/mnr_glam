// import React from 'react';
// import { Container, Card, Title, Text, Group, Badge } from '@mantine/core';
// import { Link } from 'react-router-dom';
// import { MantineProvider } from '@mantine/core';

// const DeliveryOptions = () => {
//   return (
//     <div className=''>
//    <MantineProvider>
 

    
//     <Container className="py-8 px-4">
//       <div className="text-center mb-8">
//         <Title order={1} className="text-4xl text-[#82442b] mb-4">
//           Delivery Options
//         </Title>
//         <Text className="text-lg text-[#a16240]">
//           Choose a delivery method that suits you best.
//         </Text>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Standard Delivery */}
//         <Card shadow="md" radius="md" className="border border-[#dfa47d] hover:shadow-lg transition-shadow">
//           <Title order={2} className="text-xl text-[#82442b] mb-4">
//             Standard Delivery
//           </Title>
//           <Text className="text-[#a16240] mb-2">
//             Receive your items within 5-7 business days.
//           </Text>
//           <Badge color="orange" variant="light" className="text-[#d3683d]">
//             $5.99
//           </Badge>
//         </Card>

//         {/* Express Delivery */}
//         <Card shadow="md" radius="md" className="border border-[#dfa47d] hover:shadow-lg transition-shadow">
//           <Title order={2} className="text-xl text-[#82442b] mb-4">
//             Express Delivery
//           </Title>
//           <Text className="text-[#a16240] mb-2">
//             Receive your items within 2-3 business days.
//           </Text>
//           <Badge color="orange" variant="light" className="text-[#d3683d]">
//             $12.99
//           </Badge>
//         </Card>

//         {/* Same-Day Delivery */}
//         <Card shadow="md" radius="md" className="border border-[#dfa47d] hover:shadow-lg transition-shadow">
//           <Title order={2} className="text-xl text-[#82442b] mb-4">
//             Same-Day Delivery
//           </Title>
//           <Text className="text-[#a16240] mb-2">
//             Receive your items on the same day (order before 12 PM).
//           </Text>
//           <Badge color="orange" variant="light" className="text-[#d3683d]">
//             $19.99
//           </Badge>
//         </Card>
//       </div>

//       <Group position="center" mt={16}>
//         <Link
//           to="/checkout"
//           className="bg-[#dfa47d] hover:bg-[#d3683d] text-white py-2 px-6 rounded-md text-lg font-semibold transition-colors"
//         >
//           Proceed to Checkout
//         </Link>
//       </Group>
//     </Container>
       
//    </MantineProvider>
//     </div>
//   );
// };

// export default DeliveryOptions;













// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Card, Title, Text, Group, Badge, Button } from '@mantine/core';
// import { MantineProvider } from '@mantine/core';

// const DeliveryOptions = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const navigate = useNavigate();

//   const deliveryOptions = [
//     { id: 1, name: 'Standard Delivery', description: 'Receive your items within 5-7 business days.', price: 5.99 },
//     { id: 2, name: 'Express Delivery', description: 'Receive your items within 2-3 business days.', price: 12.99 },
//     { id: 3, name: 'Same-Day Delivery', description: 'Receive your items on the same day (order before 12 PM).', price: 19.99 },
//   ];

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleProceed = () => {
//     if (selectedOption) {
//       navigate('/checkout', { state: { deliveryOption: selectedOption } });
//     } else {
//       alert('Please select a delivery option before proceeding.');
//     }
//   };

//   return (
//     <div className="">
//     <MantineProvider>

    
//     <Container className="py-8 px-4">
//       <div className="text-center mb-8">
//         <Title order={1} className="text-4xl text-[#82442b] mb-4">
//           Delivery Options
//         </Title>
//         <Text className="text-lg text-[#a16240]">
//           Choose a delivery method that suits you best.
//         </Text>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {deliveryOptions.map((option) => (
//           <Card
//             key={option.id}
//             shadow="md"
//             radius="md"
//             className={`border ${selectedOption?.id === option.id ? 'border-[#d3683d]' : 'border-[#dfa47d]'} hover:shadow-lg transition-shadow`}
//             onClick={() => handleSelect(option)}
//           >
//             <Title order={2} className="text-xl text-[#82442b] mb-4">
//               {option.name}
//             </Title>
//             <Text className="text-[#a16240] mb-2">{option.description}</Text>
//             <Badge color="orange" variant="light" className="text-[#d3683d]">
//               ${option.price.toFixed(2)}
//             </Badge>
//           </Card>
//         ))}
//       </div>

//       <Group position="center" mt={16}>
//         <Button
//           onClick={handleProceed}
//           className="bg-[#dfa47d] hover:bg-[#d3683d] text-white py-2 px-6 rounded-md text-lg font-semibold transition-colors"
//         >
//           Proceed to Checkout
//         </Button>
//       </Group>
//     </Container>
//     </MantineProvider>
   
//      </div>
//   );
// };

// export default DeliveryOptions;











import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Title, Text, Group, Badge, Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

const DeliveryOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const deliveryOptions = [
    { id: 1, name: 'Standard Delivery', description: 'Receive your items within 5-7 business days.', price: 5.99 },
    { id: 2, name: 'Express Delivery', description: 'Receive your items within 2-3 business days.', price: 12.99 },
    { id: 3, name: 'Same-Day Delivery', description: 'Receive your items on the same day (order before 12 PM).', price: 19.99 },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleProceed = () => {
    if (selectedOption) {
      navigate('/checkout', { state: { deliveryOption: selectedOption } });
    } else {
      alert('Please select a delivery option before proceeding.');
    }
  };

  return (
    <div className="">
      <MantineProvider>
        <Container className="py-8 px-4">
          <div className="text-center mb-8">
            <Title order={1} className="text-4xl text-[#82442b] mb-4">
              Delivery Options
            </Title>
            <Text className="text-lg text-[#a16240]">
              Choose a delivery method that suits you best.
            </Text>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {deliveryOptions.map((option) => (
              <Card
                key={option.id}
                shadow="md"
                radius="md"
                className={`border ${selectedOption?.id === option.id ? 'border-[#d3683d]' : 'border-[#dfa47d]'} hover:shadow-lg transition-shadow w-80`}
                onClick={() => handleSelect(option)}
              >
                <Title order={2} className="text-xl text-[#82442b] mb-4">
                  {option.name}
                </Title>
                <Text className="text-[#a16240] mb-2">{option.description}</Text>
                <Badge color="orange" variant="light" className="text-[#d3683d]">
                  ${option.price.toFixed(2)}
                </Badge>
              </Card>
            ))}
          </div>

          <Group position="center" mt={16}>
            <Button
              onClick={handleProceed}
              className="bg-[#dfa47d] hover:bg-[#d3683d] text-white py-2 px-6 rounded-md text-lg font-semibold transition-colors"
            >
              Proceed to Checkout
            </Button>
          </Group>
        </Container>
      </MantineProvider>
    </div>
  );
};

export default DeliveryOptions;
