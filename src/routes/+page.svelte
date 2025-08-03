<script lang="ts">
    import { F1Car } from "$lib/random";
    let car: F1Car | undefined = $state();
    let buildCar = () => (car = new F1Car());
    let isBuilding = $state(false);

    const handleBuildCar = async () => {
        isBuilding = true;
        // Add a slight delay for dramatic effect
        await new Promise((resolve) => setTimeout(resolve, 800));
        buildCar();
        isBuilding = false;
    };
</script>

<svelte:head>
    <title>Aston Martin F1 Car Builder</title>
    <meta
        name="description"
        content="Design an F1 car using the same process used by the Aston Martin Formula One team"
    />

    <!-- Facebook Meta Tags -->
    <meta
        property="og:url"
        content="https://aston-car-generator.benton.codes"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Aston Martin F1 Car Builder" />
    <meta
        property="og:description"
        content="Design an F1 car using the same process used by the Aston Martin Formula One team"
    />
    <meta property="og:image" content="/og.png" />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
        property="twitter:domain"
        content="aston-car-generator.benton.codes"
    />
    <meta
        property="twitter:url"
        content="https://aston-car-generator.benton.codes"
    />
    <meta name="twitter:title" content="Aston Martin F1 Car Builder" />
    <meta
        name="twitter:description"
        content="Design an F1 car using the same process used by the Aston Martin Formula One team"
    />
    <meta name="twitter:image" content="/og.png" />
</svelte:head>

<main
    class="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-800 text-white relative overflow-hidden"
>
    <!-- Animated background elements -->
    <div class="absolute inset-0 opacity-10">
        <div
            class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
            class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-lime-400 rounded-full blur-3xl animate-pulse delay-1000"
        ></div>
    </div>

    <!-- Racing stripes -->
    <div class="absolute inset-0 opacity-5">
        <div
            class="absolute top-0 left-1/3 w-1 h-full bg-emerald-400 transform rotate-12"
        ></div>
        <div
            class="absolute top-0 right-1/3 w-1 h-full bg-lime-400 transform -rotate-12"
        ></div>
    </div>

    <div class="relative z-10 container mx-auto px-6 py-12">
        <!-- Header -->
        <div class="text-center mb-12">
            <div class="inline-flex items-center gap-4 mb-6">
                <div
                    class="w-12 h-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full"
                ></div>
                <h1
                    class="text-6xl font-black bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent tracking-tight"
                >
                    ASTON MARTIN
                </h1>
                <div
                    class="w-12 h-2 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full"
                ></div>
            </div>
            <p class="text-xl text-emerald-300 font-light tracking-wide">
                F1 CAR CONFIGURATION SYSTEM
            </p>
            <div
                class="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mt-4"
            ></div>
        </div>

        <!-- Build Button -->
        <div class="text-center mb-16">
            <button
                class="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-lime-500 text-white font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-400/40 border border-emerald-400/30"
                onclick={handleBuildCar}
                disabled={isBuilding}
            >
                <div
                    class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>

                {#if isBuilding}
                    <div
                        class="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                    ></div>
                    <span class="text-lg tracking-wider">BUILDING SETUP...</span
                    >
                {:else}
                    <div
                        class="w-6 h-6 bg-white rounded-sm flex items-center justify-center"
                    >
                        <div class="w-3 h-3 bg-emerald-600 rounded-sm"></div>
                    </div>
                    <span class="text-lg tracking-wider">BUILD RACE SETUP</span>
                {/if}
            </button>
        </div>

        {#if car}
            <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <!-- Parts Configuration -->
                <div
                    class="bg-gradient-to-br from-slate-800/80 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 shadow-2xl"
                >
                    <div class="flex items-center gap-3 mb-6">
                        <div
                            class="w-8 h-8 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-lg flex items-center justify-center"
                        >
                            <div class="w-4 h-4 bg-slate-900 rounded"></div>
                        </div>
                        <h2
                            class="text-2xl font-bold text-emerald-300 tracking-wide"
                        >
                            PARTS CONFIGURATION
                        </h2>
                    </div>

                    <div class="space-y-4">
                        {#each Object.entries(car.parts) as [type, part]}
                            <div
                                class="group hover:bg-emerald-500/5 p-4 rounded-xl transition-colors duration-200 border border-transparent hover:border-emerald-500/20"
                            >
                                <div class="flex justify-between items-center">
                                    <span
                                        class="text-emerald-200 font-medium uppercase tracking-wide text-sm"
                                        >{type}</span
                                    >
                                    <div
                                        class="h-px flex-1 mx-4 bg-gradient-to-r from-emerald-500/30 to-transparent"
                                    ></div>
                                    <span class="text-white font-bold"
                                        >{part.name}</span
                                    >
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Performance Stats -->
                <div
                    class="bg-gradient-to-br from-slate-800/80 to-lime-900/20 backdrop-blur-sm rounded-2xl p-8 border border-lime-500/20 shadow-2xl"
                >
                    <div class="flex items-center gap-3 mb-6">
                        <div
                            class="w-8 h-8 bg-gradient-to-br from-lime-400 to-emerald-400 rounded-lg flex items-center justify-center"
                        >
                            <div class="w-4 h-2 bg-slate-900 rounded"></div>
                        </div>
                        <h2
                            class="text-2xl font-bold text-lime-300 tracking-wide"
                        >
                            PERFORMANCE STATS
                        </h2>
                    </div>

                    <div class="space-y-6">
                        {#each Object.entries(car.performance) as [stat, value]}
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span
                                        class="text-lime-200 font-medium uppercase tracking-wide text-sm"
                                        >{stat}</span
                                    >
                                    <span class="text-white font-bold text-lg"
                                        >{value}/100</span
                                    >
                                </div>
                                <div
                                    class="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden"
                                >
                                    <div
                                        class="h-full bg-gradient-to-r from-lime-500 to-emerald-400 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-lime-500/30"
                                        style="width: {value}%"
                                    ></div>
                                </div>
                            </div>
                        {/each}
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <span
                                    class="text-lime-200 font-medium uppercase tracking-wide text-sm"
                                    >Over/Understeer</span
                                >
                                <span class="text-white font-bold text-lg"
                                    >{car.steering}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Qualifying Position -->
            <div class="mt-8 text-center">
                <div
                    class="inline-block bg-gradient-to-r from-emerald-600 to-lime-600 p-1 rounded-2xl shadow-2xl shadow-emerald-500/20"
                >
                    <div class="bg-slate-900 rounded-xl px-8 py-6">
                        <p
                            class="text-emerald-300 text-sm font-medium uppercase tracking-wider mb-2"
                        >
                            Predicted Grid Position
                        </p>
                        <div class="flex items-center justify-center gap-3">
                            <div
                                class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-full flex items-center justify-center font-black text-slate-900 text-xl"
                            >
                                P
                            </div>
                            <span class="text-4xl font-black text-white"
                                >{car.qualifyingPosition}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <!-- Subtle racing flag pattern -->
    <div
        class="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-lime-400 via-emerald-500 via-lime-400 to-emerald-500 opacity-20"
    ></div>
</main>

<style>
    @keyframes pulse {
        0%,
        100% {
            opacity: 0.1;
        }
        50% {
            opacity: 0.2;
        }
    }

    .animate-pulse {
        animation: pulse 3s ease-in-out infinite;
    }

    .delay-1000 {
        animation-delay: 1s;
    }
</style>
