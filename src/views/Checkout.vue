<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            response : null
        }
    },
    computed: {
        ...mapState({
            payment_details: state => state.cart.payment_details
        })
    },
    async created() {
            var options = {
                "key": this.payment_details.key, // Enter the Key ID generated from the Dashboard
                "amount": this.payment_details.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": this.payment_details.currency,
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": this.payment_details.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response){
                    this.response = response
                },
                "prefill": {
                    "name": this.payment_details.name,
                    "email": this.payment_details.email,
                    "contact": this.payment_details.phone
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#F37254"
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
            e.preventDefault();
    }
}
</script> 