<script lang="ts">
    export const ssr = false;
</script>

<div id="app">
    <div class="hover-area"></div>
    <div class="sidebar">
        <div class="sidebar-content">
            <!-- Sidebar content goes here -->
            <h2>Sidebar Menu</h2>
            <nav>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/env">env</a></li>
                    <li><a href="/sketch001">Sketch 001</a></li>
                    <li><a href="/sketch002">Sketch 002</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
    <div class="main-content">
        <!-- Main content goes here -->
        <slot />
    </div>
</div>



<style>
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fullscreen Center Pane */
.main-content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    z-index: 1;
    position: relative;
}

/* Hidden Sidebar */
.sidebar {
    width: 300px;
    padding-left: 10px;
    height: 100vh;
    background-color: #333;
    position: fixed;
    top: 0;
    left: -300px;
    z-index: 2;
    transition: left 0.3s ease;
}

/* Sidebar content styling */
.sidebar-content {
    padding: 20px;
    color: #fff;
}

.sidebar h2 {
    margin-bottom: 20px;
}

.sidebar ul {
    display: block;
    list-style: none;
}

.sidebar ul li {
    display: block;
    width: 100%;
    margin-bottom: 10px;
}

.sidebar ul li a {
    display: inline-block;
    width: 100%;
    color: #fff;
    text-decoration: none;
}

/* Hover area to trigger sidebar */
.hover-area {
    position: fixed;
    top: 0;
    left: 0;
    width: 30px;
    height: 100vh;
    z-index: 3;
    /* background: #ff0000aa; */
}

/* Sidebar hover behavior */
.hover-area:hover ~ .sidebar {
    left: 0px;
}

.sidebar:hover {
    left: 0px;
}

</style>