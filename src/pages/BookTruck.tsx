import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Truck, MapPin, Calendar, Package, User, Phone, Mail, Calculator } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const bookingSchema = z.object({
  pickupLocation: z.string().min(3, 'Pickup location is required').max(200),
  dropLocation: z.string().min(3, 'Drop location is required').max(200),
  pickupDate: z.string().min(1, 'Pickup date is required'),
  pickupTime: z.string().min(1, 'Pickup time is required'),
  estimatedDistance: z.string().optional(),
  truckType: z.string().min(1, 'Please select a truck type'),
  goodsType: z.string().min(3, 'Please describe the goods').max(500),
  fullName: z.string().min(2, 'Name is required').max(100),
  phoneNumber: z.string().min(10, 'Valid phone number is required').max(15),
  email: z.string().email('Valid email is required').max(255),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const truckTypes = [
  { value: 'mini', label: 'Mini Truck (1-2 Tons)', price: 15 },
  { value: 'pickup', label: 'Pickup Truck (2-4 Tons)', price: 20 },
  { value: 'medium', label: 'Medium Truck (4-8 Tons)', price: 30 },
  { value: 'heavy', label: 'Heavy Truck (8-16 Tons)', price: 45 },
  { value: 'trailer', label: 'Trailer (16+ Tons)', price: 60 },
];

const BookTruck = () => {
  const { toast } = useToast();
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      pickupLocation: '',
      dropLocation: '',
      pickupDate: '',
      pickupTime: '',
      estimatedDistance: '',
      truckType: '',
      goodsType: '',
      fullName: '',
      phoneNumber: '',
      email: '',
    },
  });

  const watchTruckType = form.watch('truckType');
  const watchDistance = form.watch('estimatedDistance');

  // Calculate price estimate
  const calculatePrice = () => {
    const distance = parseFloat(watchDistance || '0');
    const truck = truckTypes.find((t) => t.value === watchTruckType);
    if (distance > 0 && truck) {
      setEstimatedPrice(distance * truck.price);
    } else {
      setEstimatedPrice(null);
    }
  };

  const onSubmit = (data: BookingFormData) => {
    console.log('Booking submitted:', data);
    toast({
      title: 'Booking Request Submitted!',
      description: 'We will contact you shortly to confirm your booking.',
    });
    form.reset();
    setEstimatedPrice(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-[72px] bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Book a Truck
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Fill in the details below and we'll get back to you with confirmation. 
            Fast, reliable truck transportation for all your goods.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Location Section */}
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Pickup & Drop Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="pickupLocation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pickup Location</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter pickup address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="dropLocation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Drop Location</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter drop address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Date & Time Section */}
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Schedule
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="pickupDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pickup Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="pickupTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pickup Time</FormLabel>
                              <FormControl>
                                <Input type="time" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="mt-4">
                        <FormField
                          control={form.control}
                          name="estimatedDistance"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estimated Distance (km)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="Enter approximate distance"
                                  {...field}
                                  onChange={(e) => {
                                    field.onChange(e);
                                    setTimeout(calculatePrice, 100);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Truck & Goods Section */}
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                        <Truck className="w-5 h-5 text-primary" />
                        Truck & Goods Details
                      </h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="truckType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Select Truck Type</FormLabel>
                              <Select
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  setTimeout(calculatePrice, 100);
                                }}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Choose a truck type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {truckTypes.map((truck) => (
                                    <SelectItem key={truck.value} value={truck.value}>
                                      {truck.label} - ₹{truck.price}/km
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="goodsType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Type of Goods</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe what you're transporting (e.g., furniture, electronics, construction materials)"
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Contact Details Section */}
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Contact Details
                      </h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="Your phone number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Your email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full h-14 text-lg font-semibold rounded-xl"
                      size="lg"
                    >
                      <Truck className="w-5 h-5 mr-2" />
                      Submit Booking Request
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Price Estimate Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-2xl shadow-lg sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-heading font-bold text-foreground">
                    Price Estimate
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-6">
                  Enter the estimated distance to see the price calculation.
                </p>

                {estimatedPrice !== null ? (
                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      Estimated Price
                    </div>
                    <div className="text-4xl font-heading font-bold text-primary">
                      ₹{estimatedPrice.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      *Final price may vary based on actual distance and conditions
                    </div>
                  </div>
                ) : (
                  <div className="bg-muted rounded-xl p-6 text-center">
                    <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Select truck type and enter distance to get an estimate
                    </p>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    This is an estimated price. The final price will be confirmed 
                    after reviewing your specific requirements.
                  </p>
                </div>

                {/* Quick Contact */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Need Help?</h4>
                  <a
                    href="tel:+917002066616"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +91 7002066616
                  </a>
                  <a
                    href="mailto:info@starlogistics.com"
                    className="flex items-center gap-2 text-primary hover:underline mt-2"
                  >
                    <Mail className="w-4 h-4" />
                    info@starlogistics.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookTruck;
