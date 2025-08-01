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
        Schema::create('menus', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('name');
            $table->uuid('parent_id')->nullable()->index();
            $table->unsignedInteger('depth')->default(0);
            $table->timestamps();

            $table->primary('id'); // Definisikan primary key secara eksplisit
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
