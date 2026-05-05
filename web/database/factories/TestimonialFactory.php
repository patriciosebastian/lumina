<?php

namespace Database\Factories;

use App\Models\Testimonial;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\Illuminate\Database\Eloquent\Model>
     */
    protected $model = Testimonial::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'text' => $this->faker->text(150),
            'author_name' => $this->faker->name(),
            'author_title' => $this->faker->jobTitle(),
            // 'author_image' => $this->faker->imageUrl(56, 56, 'people', true),
            'author_image' => "https://source.unsplash.com/56x56/?face&sig={$this->faker->unique()->randomNumber()}",
        ];
    }
}
