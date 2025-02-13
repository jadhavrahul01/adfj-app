<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();

            $table->string("custname");
            $table->string("custdesignation");
            $table->string("custreview");
            // $table->text("custlogo");
            $table->text("custimg");
            $table->string("custstar");
            $table->string('date', 100);
            $table->text("custlogo");
            // $table->string("custdesignation");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};
