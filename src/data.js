const houses = [
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-08-20',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-08-20',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-08-20',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Tamilnadu, INDIA',
    when: '2022-01-26',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Tamilnadu, INDIA',
    when: '2022-01-26',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-08-20',
    price: 200,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '26 01 2023',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-08-20',
    price: 200,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '26 01 2023',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Ocland, NZ',
    when: '2023-07-15',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Ocland, NZ',
    when: '2023-07-15',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Ocland, NZ',
    when: '2023-07-15',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Ocland, NZ',
    when: '2023-07-15',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',
    location: 'New York, USA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'New York, USA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-08-20',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'South Bombay, INDIA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Tamilnadu, INDIA',
    when: '2022-01-26',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Gujrat, INDIA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Tamilnadu, INDIA',
    when: '2022-01-26',
    price: 2000,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-01-26',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Shanghai, CHINA',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-08-20',
    price: 200,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '26 01 2023',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-08-20',
    price: 200,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-09-9',
    price: 1000,
    property_type: 'Commercial',
    beds: '2',
    bathrooms: '3',
    size: '60',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '26 01 2023',
    price: 500,
    property_type: 'Flat',
    beds: '3',
    bathrooms: '3',
    size: '100',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'London, UK',
    when: '2022-10-11',
    price: 3000,
    property_type: 'Educational',
    beds: '4',
    bathrooms: '3',
    size: '1200',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Ocland, NZ',
    when: '2023-07-15',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Ocland, NZ',
    when: '2023-07-15',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Ocland, NZ',
    when: '2023-07-15',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
  {
    name: 'Dummy Data - 1',

    location: 'Ocland, NZ',
    when: '2023-07-15',
    price: 250,
    property_type: 'Houses',
    beds: '4',
    bathrooms: '3',
    size: '80',
  },
]

export { houses }
